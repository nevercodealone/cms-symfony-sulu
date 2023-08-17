import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://nevercodealone.de/'
  },
  env: {
    timeoutPageload: 3000
  },
  viewportWidth: 1200
});
