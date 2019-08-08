import { Config } from "@stencil/core";
import replace from "rollup-plugin-replace";

export const config: Config = {
  namespace: "shadowcat",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    replace({
      exclude: "node_modules/**",
      delimiters: ["<@", "@>"],
      values: {
        DATADOG_CLIENT_KEY: process.env.DATADOG_CLIENT_KEY
      }
    })
  ]
};
