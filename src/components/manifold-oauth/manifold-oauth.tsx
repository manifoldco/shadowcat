import { Component, h } from "@stencil/core";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  render() {
    return (
      <iframe
        style={{ height: "100vh", width: "100vw" }}
        src="https://strongly-typed.saxyfool.dev"
      />
    );
  }
}
