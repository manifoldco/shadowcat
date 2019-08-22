# Shadowcat dev

## Dev Setup

1. `npm install` to install dependencies.
1. `npm start` to start the development server.
1. Go to `localhost:3333`. The development server will display a blank page.
1. Open the console. There will be a message/token logged.

## Publish to npm

1. Add a git tag with the version number you want to publish.
   - For example, version 1 would be `git tag v1.0.0`.
   - To determine what version to use, [follow this handy guide][ui-release]
1. Travis will take it the rest of the way and publish to npm
   - If anything goes wrong, inspect Travis logs and ping #guild-frontend

[ui-release]: https://github.com/manifoldco/ui/tree/master/src#step-1-prerelease
