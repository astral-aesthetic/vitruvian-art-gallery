import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Gallery from './components/Gallery'
import LoadingScreen from './components/ui/LoadingScreen'
import Instructions from './components/ui/Instructions'
import { ErrorBoundary } from './components/ErrorBoundary'
import './App.css'

// Add global error listener
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error)
})

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showInstructions, setShowInstructions] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowInstructions(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions)
  }

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}
      
      {!isLoading && (
        <>
          <ErrorBoundary>
            <Canvas
              camera={{
                position: [0, 1.7, 3],
                fov: 75,
                near: 0.1,
                far: 1000
              }}
              className="canvas"
            >
              <Suspense fallback={null}>
                <Gallery />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
          
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