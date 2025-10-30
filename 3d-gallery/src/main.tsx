import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'

console.log('[main.tsx] Starting app, base:', (import.meta as any).env?.BASE_URL || '/')

try {
  const rootEl = document.getElementById('root')
  if (!rootEl) {
    throw new Error('Root element not found')
  }
  console.log('[main.tsx] Root element found, creating React root')
  
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
  console.log('[main.tsx] React app rendered successfully')
} catch (err) {
  console.error('[main.tsx] Fatal error during app startup:', err)
  document.body.innerHTML = `<div style="padding:20px;color:red;font-family:monospace;">
    <h2>App Error</h2>
    <p>${String(err)}</p>
    <pre>${(err instanceof Error ? err.stack : String(err))}</pre>
  </div>`
}
