import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  @Prop() oauthUrl: string;

  tokenListener = (ev: MessageEvent) => {
    console.log(ev);
  };

  componentWillLoad() {
    window.addEventListener("message", this.tokenListener);
  }

  componentDidUnload() {
    window.removeEventListener("message", this.tokenListener);
  }

  render() {
    return (
      <iframe style={{ height: "0px", width: "0px" }} src={this.oauthUrl} />
    );
  }
}
