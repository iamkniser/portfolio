import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Шрифты, участвующие в первой отрисовке: H1 и основной текст.
 * Без предзагрузки браузер узнаёт о них только разобрав CSS — это
 * лишний круг ожидания и подмена шрифта уже после отрисовки.
 */
const CRITICAL_FONTS = ['unbounded-cyrillic-600-normal', 'ibm-plex-sans-cyrillic-400-normal']

function preloadCriticalFonts(): Plugin {
  const hrefs: string[] = []

  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const name of Object.keys(bundle)) {
        if (!name.endsWith('.woff2')) continue
        if (CRITICAL_FONTS.some((f) => name.includes(f))) hrefs.push('/' + name)
      }
    },
    transformIndexHtml() {
      return hrefs.map((href) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href, crossorigin: '' },
        injectTo: 'head-prepend' as const,
      }))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadCriticalFonts()],
})
