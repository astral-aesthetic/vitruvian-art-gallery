import React, { useState, useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('正在初始化画廊...')
  
  useEffect(() => {
    const texts = [
      '正在初始化画廊...',
      '加载艺术作品...',
      '准备照明系统...',
      '构建3D场景...'
    ]
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 2, 100)
        
        // 根据进度更新加载文本
        if (newProgress < 25) {
          setLoadingText(texts[0])
        } else if (newProgress < 50) {
          setLoadingText(texts[1])
        } else if (newProgress < 75) {
          setLoadingText(texts[2])
        } else {
          setLoadingText(texts[3])
        }
        
        return newProgress
      })
    }, 40)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">{loadingText}</h1>
        
        <div className="loading-bar-container">
          <div 
            className="loading-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="loading-percentage">
          {progress}%
        </div>
        
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen