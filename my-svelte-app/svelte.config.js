// svelte.config.js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  compilerOptions: {
    // ✅ Compatibility with Svelte 3/4 style
    compatibility: {
      componentApi: 4
    }
  },
  preprocess: vitePreprocess()
};
