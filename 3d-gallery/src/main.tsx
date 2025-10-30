import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'

console.log('[main.tsx] Script executing, base:', (import.meta as any).env?.BASE_URL || '/')

try {
  console.log('[main.tsx] Starting app...')
  const rootEl = document.getElementById('root')
  if (!rootEl) {
    throw new Error('Root element #root not found in DOM')
  }
  console.log('[main.tsx] Root element found, creating React root')
  
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
  console.log('[main.tsx] App rendered successfully')
} catch (err) {
  console.error('[main.tsx] Fatal startup error:', err)
  const errorEl = document.getElementById('error-overlay')
  const detailEl = document.getElementById('error-detail')
  if (errorEl && detailEl) {
    detailEl.textContent = `${err instanceof Error ? err.name : 'Error'}: ${err instanceof Error ? err.message : String(err)}\n\n${err instanceof Error ? err.stack : ''}`
    errorEl.classList.add('visible')
  }
}
