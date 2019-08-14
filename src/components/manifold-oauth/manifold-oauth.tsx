import { Event, EventEmitter, Component, h, Prop } from "@stencil/core";
import { AuthToken, PumaAuthToken } from "../../interface";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  @Prop() oauthUrl?: string = "https://login.manifold.co/signin/oauth/web";
  @Event() receiveManifoldToken: EventEmitter<AuthToken>;

  private loadTime?: Date;

  tokenListener = (ev: MessageEvent) => {
    const pumaToken = ev.data as PumaAuthToken;
    this.receiveManifoldToken.emit({
      token: pumaToken.access_token,
      expiry: pumaToken.expiry,
      error: pumaToken.error,
      duration: new Date().getTime() - this.loadTime.getTime()
    });
  };

  componentWillLoad() {
    this.loadTime = new Date();
    window.addEventListener("message", this.tokenListener);
  }

  componentDidUnload() {
    window.removeEventListener("message", this.tokenListener);
  }

  render() {
    return <iframe src={this.oauthUrl} style={{ display: "none" }} />;
  }
}
