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
