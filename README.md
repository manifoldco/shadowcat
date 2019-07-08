# shadowcat

Invisible web component auth implementation of Manifold&#39;s PUMA &lt;https://github.com/manifoldco/puma&gt;

## Usage

1. `npm i @manifoldco/shadowcat`
2. Register the `manifold-oauth` web component with one of the following methods:

**ES Module**

```js
// TODO
```

**HTML**

```html
<!-- TODO -->
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

1. `npm install` to install dependencies
1. `npm start` to start the development server
1. Go to `localhost:3333`. The development server will display a blank page. 
1. Open the console. There will be a message/token logged.

## Publish to npm

:shrug:

## Links

[Code of Conduct](./CODE_OF_CONDUCT.md) |
[Contribution Guidelines](./.github/CONTRIBUTING.md)

[![GitHub release](https://img.shields.io/github/tag/manifoldco/shadowcat.svg?label=latest)](https://github.com/manifoldco/shadowcat/releases)

[![Travis](https://img.shields.io/travis/manifoldco/shadowcat/master.svg)](https://travis-ci.org/manifoldco/shadowcat)

[![License](https://img.shields.io/badge/license-BSD-blue.svg)](./LICENSE.md)
