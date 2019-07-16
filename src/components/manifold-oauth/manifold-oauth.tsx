import { Event, EventEmitter, Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  form?: HTMLFormElement;
  @Prop() oauthUrl: string;
  @Event() tokenReceived: EventEmitter;
  @State() token: string;

  tokenListener = (ev: MessageEvent) => {
    this.tokenReceived.emit(ev.data);
    this.token = ev.data;
  };

  componentWillLoad() {
    window.addEventListener("message", this.tokenListener);
  }

  componentDidUnload() {
    window.removeEventListener("message", this.tokenListener);
  }

  componentDidRender() {
    if (this.token && this.form) {
      this.form.submit();
    }
  }

  render() {
    return [
      <iframe
        name="manifold-oauth"
        style={{ display: "none" }}
        src={this.oauthUrl}
      />,
      <form
        ref={node => (this.form = node)}
        target="manifold-oauth"
        action="http://localhost:8080/signin/oauth/choco-chip"
        method="POST"
      >
        <input type="hidden" name="token" value={this.token} />
      </form>
    ];
  }
}
