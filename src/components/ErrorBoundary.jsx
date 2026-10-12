import { Component } from 'react';

/* A render error should never leave the visitor staring at a blank page. */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Hotely render error:', error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="boundary">
        <div className="boundary-card">
          <h1>Something went wrong on this page.</h1>
          <p>Sorry about that. Reloading usually clears it. If it keeps happening, head back to the home page.</p>
          <pre>{String(this.state.error?.message || this.state.error)}</pre>
          <div className="boundary-actions">
            <button type="button" onClick={() => window.location.reload()}>Reload the page</button>
            <a href="#/" onClick={() => { window.location.hash = '#/'; window.location.reload(); }}>Back to home</a>
          </div>
        </div>
      </div>
    );
  }
}
