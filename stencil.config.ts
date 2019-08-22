import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'manifold',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
