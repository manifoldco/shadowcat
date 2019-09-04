import { Event, EventEmitter, Component, h, Prop } from '@stencil/core';
import { AuthToken, PumaAuthToken } from '../../interface';

@Component({ tag: 'manifold-oauth' })
export class ManifoldOauth {
  @Prop() oauthUrl?: string = 'https://login.manifold.co/signin/oauth/web';
  @Event() receiveManifoldToken: EventEmitter<AuthToken>;

  private loadTime?: Date;

  tokenListener = (ev: MessageEvent) => {
    const pumaToken = ev.data as PumaAuthToken;
    this.receiveManifoldToken.emit({
      token: pumaToken.access_token,
      expiry: pumaToken.expiry,
      error: pumaToken.error,
      duration: new Date().getTime() - this.loadTime.getTime(),
    });
  };

  componentWillLoad() {
    this.loadTime = new Date();
    window.addEventListener('message', this.tokenListener);
  }

  componentDidUnload() {
    window.removeEventListener('message', this.tokenListener);
  }

  render() {
    return (
      <iframe
        src={this.oauthUrl}
        allowtransparency="true"
        aria-hidden="true"
        frameborder="0"
        id="manifold-oauth-window"
        name="manifold-oauth-window"
        scrolling="no"
        tabindex="-1"
        sandbox="allow-scripts"
        style={{
          border: 'none', // don’t have a border
          display: 'block', // SUPER important for iframe to not be display: none
          height: '1px', // take up height, just in case
          left: '0', // don’t cause horizontal scrollbars
          margin: '0px', // don’t have margins
          padding: '0px', // don’t have padding
          pointerEvents: 'none', // don’t block user clicks
          position: 'fixed', // don’t cause reflow
          userSelect: 'none', // don’t allow selection
          visibility: 'hidden', // exist, but don’t be visible
          width: '75vw', // take up width w/o scrollbars
        }}
      />
    );
  }
}
