import { Component, type ReactNode } from 'react';

export class PageLoadBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() { return { failed: true }; }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="mx-auto min-h-[60svh] max-w-xl px-6 py-20 text-[#203728]">
        <h1 className="font-heading text-3xl font-bold text-[#3B7F4B]">Deze pagina kon niet laden</h1>
        <p className="mt-4">Controleer je verbinding en probeer het opnieuw.</p>
        <button type="button" onClick={() => window.location.reload()} className="mt-6 min-h-11 rounded-full bg-[#3B7F4B] px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B7F4B]">Probeer opnieuw</button>
      </div>
    );
  }
}
