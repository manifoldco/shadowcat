# shadowcat

Invisible web component auth implementation of Manifold&#39;s PUMA &lt;https://github.com/manifoldco/puma&gt;

## Usage

1. `npm i @manifoldco/shadowcat`
2. Import and register the `manifold-oauth` web component:

```js
import { defineCustomElements } from '@manifoldco/shadowcat/dist/loader';

defineCustomElements(window);
```

3. Add the following code anywhere on your website/app to get an auth token:

```html
<manifold-oauth oauth-url="[your-oauth-url]"></manifold-oauth>
```

4. Listen for the event `tokenReceived`:

```js
document.addEventListener("tokenReceived", e => {
  console.log(e.detail); // received token
  // do stuff...
});
```

## Dev Setup

1. `npm install` to install dependencies.
1. `npm start` to start the development server.
1. Go to `localhost:3333`. The development server will display a blank page. 
1. Open the console. There will be a message/token logged.

## Publish to npm

1. Add a git tag with the version number you want to publish. 
   - For example, version 1 would be `git tag v1.0.0`.
1. Publish the version to npm by running `npm run publish`. 
   - Ensure that you're logged into your npm account and have access to publish packages in the `@manifoldco` org when you do this.


## Links

[Code of Conduct](./CODE_OF_CONDUCT.md) |
[Contribution Guidelines](./.github/CONTRIBUTING.md)

[![GitHub release](https://img.shields.io/github/tag/manifoldco/shadowcat.svg?label=latest)](https://github.com/manifoldco/shadowcat/releases)

[![Travis](https://img.shields.io/travis/manifoldco/shadowcat/master.svg)](https://travis-ci.org/manifoldco/shadowcat)

[![License](https://img.shields.io/badge/license-BSD-blue.svg)](./LICENSE.md)
