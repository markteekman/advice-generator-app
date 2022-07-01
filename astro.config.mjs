import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://markteekman.github.io/',
  base: 'advice-generator-app',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
})
