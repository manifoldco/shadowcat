import { Event, EventEmitter, Component, h, Prop } from "@stencil/core";
import { AuthToken, PumaAuthToken } from "../../interface";

declare global {
  interface Window {
    DD_LOGS: any;
  }
}

@Component({
  tag: "manifold-oauth"
})
export class ManifoldOauth {
  @Prop() oauthUrl?: string = "https://login.manifold.co/signin/oauth/web";
  @Event() receiveManifoldToken: EventEmitter<AuthToken>;

  private ddScript?: HTMLScriptElement;
  private loadTime?: Date;

  tokenListener = (ev: MessageEvent) => {
    const pumaToken = ev.data as PumaAuthToken;
    this.receiveManifoldToken.emit({
      token: pumaToken.access_token,
      expiry: pumaToken.expiry,
      error: pumaToken.error
    });
    if (window.DD_LOGS) {
      window.DD_LOGS.logger.info("Token received", {
        source: "shadowcat",
        type: "token_received",
        duration: new Date().getTime() - this.loadTime.getTime()
      });
    }
  };

  ddLoadListener = () => {
    window.DD_LOGS.init({
      clientToken: "<@DATADOG_CLIENT_KEY@>",
      forwardErrorsToLogs: false
    });
  };

  componentWillLoad() {
    this.loadTime = new Date();
    window.addEventListener("message", this.tokenListener);
  }

  componentDidLoad() {
    this.ddScript.addEventListener("load", () => this.ddLoadListener);
  }

  componentDidUnload() {
    window.removeEventListener("message", this.tokenListener);
    this.ddScript.removeEventListener("load", this.ddLoadListener);
  }

  render() {
    return (
      <div style={{ display: "none" }}>
        {!window.DD_LOGS && (
          <script
            type="text/javascript"
            src="https://www.datadoghq-browser-agent.com/datadog-logs-us.js"
            ref={el => (this.ddScript = el as HTMLScriptElement)}
          ></script>
        )}
        <iframe src={this.oauthUrl} />
      </div>
    );
  }
}
