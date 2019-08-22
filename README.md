# shadowcat

Cross-platform Manifold OAuth library

## Usage

1. `npm i @manifoldco/shadowcat`
2. Import and register the `manifold-oauth` web component:

```js
import('@manifoldco/shadowcat/dist/loader').then(({ defineCustomElements }) =>
  defineCustomElements(window)
);
```

3. Add the following code anywhere on your website/app to get an auth token:

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
