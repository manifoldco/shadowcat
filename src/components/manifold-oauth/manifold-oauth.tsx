import { Event, EventEmitter, Component, h, Prop } from "@stencil/core";
import { AuthToken, PumaAuthToken } from "../../interface";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  @Prop() oauthUrl?: string = "https://login.manifold.co/signin/oauth/web";
  @Event() receiveManifoldToken: EventEmitter<AuthToken>;

  tokenListener = (ev: MessageEvent) => {
    const pumaToken = ev.data as PumaAuthToken;
    this.receiveManifoldToken.emit({
      token: pumaToken.access_token,
      expiry: pumaToken.expiry,
      error: pumaToken.error
    });
  };

  componentWillLoad() {
    window.addEventListener("message", this.tokenListener);
  }

  componentDidUnload() {
    window.removeEventListener("message", this.tokenListener);
  }

  render() {
    return <iframe style={{ display: "none" }} src={this.oauthUrl} />;
  }
}
