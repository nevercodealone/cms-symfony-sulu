import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://nevercodealone.de/'
  },
  viewportWidth: 1200
});
