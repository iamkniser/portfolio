import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Только cyrillic и latin: пакеты без суффикса тянут ещё greek, vietnamese
// и latin-ext, раздувая блокирующий CSS вчетверо.
import '@fontsource/unbounded/cyrillic-500.css'
import '@fontsource/unbounded/latin-500.css'
import '@fontsource/unbounded/cyrillic-600.css'
import '@fontsource/unbounded/latin-600.css'
import '@fontsource/ibm-plex-sans/cyrillic-400.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/cyrillic-500.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/cyrillic-600.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/jetbrains-mono/cyrillic-400.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/cyrillic-500.css'
import '@fontsource/jetbrains-mono/latin-500.css'

import './styles/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
