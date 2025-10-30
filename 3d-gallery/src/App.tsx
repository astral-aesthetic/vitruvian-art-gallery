import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Gallery from './components/Gallery'
import LoadingScreen from './components/ui/LoadingScreen'
import Instructions from './components/ui/Instructions'
import './App.css'

console.log('[App.tsx] App component initializing')

// Pre-flight check for THREE and WebGL support
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
    if (!gl) {
      throw new Error('WebGL not supported')
    }
    console.log('[App.tsx] WebGL check passed')
    return true
  } catch (err) {
    console.error('[App.tsx] WebGL check failed:', err)
    throw new Error(`WebGL not supported: ${err}`)
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showInstructions, setShowInstructions] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('[App.tsx] Component mounted, checking WebGL')
    try {
      checkWebGLSupport()
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('[App.tsx] Fatal error:', msg)
      setError(msg)
      return
    }

    console.log('[App.tsx] WebGL OK, scheduling loader timeout')
    const timer = setTimeout(() => {
      console.log('[App.tsx] Loading complete, showing canvas')
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        console.log('[App.tsx] Hiding instructions')
        setShowInstructions(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const toggleInstructions = () => {
    console.log('[App.tsx] Toggling instructions')
    setShowInstructions(!showInstructions)
  }

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red', fontFamily: 'monospace' }}>
        <h2>System Error</h2>
        <p>{error}</p>
        <p>Try refreshing the page or check that your browser supports WebGL.</p>
      </div>
    )
  }

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}
      
      {!isLoading && (
        <>
          <Canvas
            camera={{
              position: [0, 1.7, 3],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
            shadows
            className="canvas"
            onCreated={() => console.log('[App.tsx] Canvas created successfully')}
          >
            <Suspense fallback={null}>
              <Physics gravity={[0, -9.82, 0]}>
                <Gallery />
              </Physics>
            </Suspense>
          </Canvas>
          
          {showInstructions && (
            <Instructions onClose={() => setShowInstructions(false)} />
          )}
          
          <button 
            className="help-button"
            onClick={toggleInstructions}
          >
            ?
          </button>
        </>
      )}
    </div>
  )
}

export default App