import { Component, h } from "@stencil/core";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
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
      <iframe
        style={{ height: "100vh", width: "100vw" }}
        src="http://localhost:8080/signin/oauth/web"
      />
    );
  }
}
