# shadowcat

Simple JS OAuth solutions for [Manifold UI][manifold-ui]

## Usage

### React

In a terminal, install `@manifoldco/shadowcat` for your app:

```bash
npm i @manifoldco/shadowcat
```

Then register the web component (we recommend as high up the DOM tree as possible, so it’ll load sooner).

```jsx
import React, { useEffect, useRef } from "react";

import("@manifoldco/shadowcat/dist/loader").then(({ defineCustomElements }) =>
  defineCustomElements(window)
);

const App = () => {
  const authRef = useRef(null);

  useEffect(() => {
    // Fires whenever a token is received
    const tokenReceived = detail => {
      console.log(detail);
      // {
      //   duration: 1450,
      //   error: null,
      //   expiry: 1566565841,
      //   token: "Hi I'm a super duper secret token!"
      // }
    };

    if (authRef.current) {
      authRef.addEventListener("receiveManifoldToken", tokenReceived);
    }
  }, []);

  return (
    <>
      <Routes />
      <manifold-oauth ref={authRef} /> {/* this can be placed anywhere, really, but the sooner it loads the better  */}
    </>
  );
};
```

### HTML / JS

```html
<body>
  <manifold-auth></manifold-auth>
  <script src="https://unpkg.com/@manifoldco/shadowcat/dist/manifold.js"></script>
  <script>
    document
      .querySelector("manifold-oauth")
      .addEventListener("receiveManifoldToken", e => {
        console.log(e.detail);
        // {
        //   duration: 1450,
        //   error: null,
        //   expiry: 1566565841,
        //   token: "Hi I'm a super duper secret token!"
        // }
      });
  </script>
</body>
```

### CDN

In any setup, you can use a CDN for Shadowcat

```
https://js.cdn.manifold.co/@manifoldco/shadowcat/       # latest (beware of breaking changes!)
https://js.cdn.manifold.co/@manifoldco/shadowcat@0.2.0/ # specific version
```

## Options

### OAuth URL

You can change the OAuth URL from Manifold’s default by specifying `oauth-url` on the custom element:

```html
<manifold-oauth oauth-url="[your-oauth-url]"></manifold-oauth>
```

## Links

[Code of Conduct](./CODE_OF_CONDUCT.md) |
[Contribution Guidelines](./.github/CONTRIBUTING.md)

[![GitHub release](https://img.shields.io/github/tag/manifoldco/shadowcat.svg?label=latest)](https://github.com/manifoldco/shadowcat/releases)

[![Travis](https://img.shields.io/travis/manifoldco/shadowcat/master.svg)](https://travis-ci.com/manifoldco/shadowcat)

[![version (scoped)](https://img.shields.io/npm/v/@manifoldco/shadowcat.svg)](https://www.npmjs.com/package/@manifoldco/shadowcat)

[![License](https://img.shields.io/badge/license-BSD-blue.svg)](./LICENSE.md)

[manifold-ui]: https://ui.sandbox.manifold.co
