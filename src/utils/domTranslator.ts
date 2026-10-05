import { PHRASE_DICTIONARY, WORD_MAP } from '../translations/fullSiteDictionary';
import { Language } from '../translations/translations';

// Custom extension on DOM Text node
interface ExtTextNode extends Text {
  __originalDutchText?: string;
}

// Protected keywords that should NEVER be translated
const PROTECTED_TERMS = ['Slijpmaat', 'Particulier', 'Zakelijk', 'Teun', 'Mike', 'Utrecht'];

/**
 * Translates a Dutch string to English using the dictionary
 */
export function translateDutchToEnglish(text: string): string {
  if (!text || !text.trim()) return text;

  let result = text;

  // 1. First pass: Apply multi-word phrases (longest matches first)
  for (const [dutchPhrase, englishPhrase] of PHRASE_DICTIONARY) {
    if (result.includes(dutchPhrase)) {
      // Escape for regex safe replace
      const escaped = dutchPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      result = result.replace(new RegExp(escaped, 'g'), englishPhrase);
    }
  }

  // 2. Second pass: Apply individual words with word boundaries
  for (const [dutchWord, englishWord] of Object.entries(WORD_MAP)) {
    if (PROTECTED_TERMS.includes(dutchWord)) continue;
    const escaped = dutchWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'g');
    if (regex.test(result)) {
      result = result.replace(regex, englishWord);
    }
  }

  return result;
}

let activeLanguage: Language = 'nl';
let observer: MutationObserver | null = null;
let isTranslating = false;

function shouldSkipElement(element: Element | null): boolean {
  if (!element) return false;
  const tagName = element.tagName.toLowerCase();
  if (['script', 'style', 'noscript', 'svg', 'path', 'code', 'pre'].includes(tagName)) {
    return true;
  }
  if (element.hasAttribute('translate') && element.getAttribute('translate') === 'no') {
    return true;
  }
  if (element.classList && element.classList.contains('notranslate')) {
    return true;
  }
  return false;
}

function processTextNode(node: ExtTextNode, lang: Language) {
  const parent = node.parentElement;
  if (!parent || shouldSkipElement(parent)) return;

  // Check if ancestor is marked notranslate
  if (parent.closest('[translate="no"], .notranslate')) {
    return;
  }

  // Cache original Dutch text
  if (node.__originalDutchText === undefined) {
    node.__originalDutchText = node.nodeValue || '';
  }

  if (lang === 'en') {
    const translated = translateDutchToEnglish(node.__originalDutchText);
    if (node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
  } else {
    // Restore Dutch
    if (node.nodeValue !== node.__originalDutchText) {
      node.nodeValue = node.__originalDutchText;
    }
  }
}

function processElementAttributes(el: HTMLElement, lang: Language) {
  if (shouldSkipElement(el) || el.closest('[translate="no"], .notranslate')) return;

  // Placeholder
  if (el.hasAttribute('placeholder')) {
    const current = el.getAttribute('placeholder') || '';
    if (!el.dataset.origPlaceholder) {
      el.dataset.origPlaceholder = current;
    }
    const target = lang === 'en' ? translateDutchToEnglish(el.dataset.origPlaceholder) : el.dataset.origPlaceholder;
    if (current !== target) el.setAttribute('placeholder', target);
  }

  // Title
  if (el.hasAttribute('title')) {
    const current = el.getAttribute('title') || '';
    if (!el.dataset.origTitle) {
      el.dataset.origTitle = current;
    }
    const target = lang === 'en' ? translateDutchToEnglish(el.dataset.origTitle) : el.dataset.origTitle;
    if (current !== target) el.setAttribute('title', target);
  }
}

function translateTree(root: Node, lang: Language) {
  if (isTranslating) return;
  isTranslating = true;

  try {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            if (shouldSkipElement(el) || el.closest('[translate="no"], .notranslate')) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
          if (node.nodeType === Node.TEXT_NODE) {
            const parent = (node as Text).parentElement;
            if (!parent || shouldSkipElement(parent) || parent.closest('[translate="no"], .notranslate')) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );

    let currentNode: Node | null = walker.currentNode;
    while (currentNode) {
      if (currentNode.nodeType === Node.TEXT_NODE) {
        processTextNode(currentNode as ExtTextNode, lang);
      } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
        processElementAttributes(currentNode as HTMLElement, lang);
      }
      currentNode = walker.nextNode();
    }
  } finally {
    isTranslating = false;
  }
}

/**
 * Switch active DOM language between 'nl' and 'en'
 */
export function setDomLanguage(lang: Language) {
  activeLanguage = lang;
  document.documentElement.lang = lang;

  if (typeof document !== 'undefined' && document.body) {
    translateTree(document.body, lang);
  }

  if (lang === 'en' && !observer && typeof window !== 'undefined') {
    observer = new MutationObserver((mutations) => {
      if (activeLanguage !== 'en' || isTranslating) return;
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            translateTree(node, 'en');
          });
        } else if (mutation.type === 'characterData') {
          const target = mutation.target as ExtTextNode;
          if (target && target.parentElement && !shouldSkipElement(target.parentElement)) {
            processTextNode(target, 'en');
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  } else if (lang === 'nl' && observer) {
    observer.disconnect();
    observer = null;
  }
}
