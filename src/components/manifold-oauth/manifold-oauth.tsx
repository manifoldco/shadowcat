import { Event, EventEmitter, Component, h, Prop } from "@stencil/core";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  @Prop() oauthUrl?: string = "https://login.manifold.co/signin/oauth/web";
  @Event() receiveManifoldToken: EventEmitter;

  tokenListener = (ev: MessageEvent) => {
    this.receiveManifoldToken.emit(ev.data);
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
