import React, { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_HEIGHT = 1200;

export const EmbeddedCalculator: React.FC = () => {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const observerRef = useRef<ResizeObserver | null>(null);

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.currentTarget;
    const document = iframe.contentDocument;

    observerRef.current?.disconnect();
    if (!document?.body) return;

    const updateHeight = () => {
      const nextHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      setHeight(Math.ceil(nextHeight));
    };

    updateHeight();
    observerRef.current = new ResizeObserver(updateHeight);
    observerRef.current.observe(document.body);
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return (
    <iframe
      src="/bestelcalculator-v13.html"
      title="Slijpmaat bestelcalculator"
      onLoad={handleLoad}
      style={{ height }}
      className="block w-full border-0 bg-transparent"
      scrolling="no"
    />
  );
};
