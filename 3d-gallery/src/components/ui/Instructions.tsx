import React from 'react'
import './Instructions.css'

interface InstructionsProps {
  onClose: () => void
}

const Instructions: React.FC<InstructionsProps> = ({ onClose }) => {
  return (
    <div className="instructions-overlay">
      <div className="instructions-content">
        <button className="instructions-close" onClick={onClose}>
          ×
        </button>
        
        <h2 className="instructions-title">操作指南</h2>
        
        <div className="instructions-list">
          <div className="instruction-item">
            <div className="instruction-keys">
              <kbd>W</kbd>
              <kbd>A</kbd>
              <kbd>S</kbd>
              <kbd>D</kbd>
            </div>
            <span className="instruction-desc">移动</span>
          </div>
          
          <div className="instruction-item">
            <div className="instruction-icon">🐭</div>
            <span className="instruction-desc">控制视角</span>
          </div>
          
          <div className="instruction-item">
            <div className="instruction-keys">
              <kbd>ESC</kbd>
            </div>
            <span className="instruction-desc">退出鼠标锁定</span>
          </div>
        </div>
        
        <div className="instructions-tip">
          <p>点击屏幕即可开始游览。</p>
          <p>享受您的艺术之旅！</p>
        </div>
      </div>
    </div>
  )
}

export default Instructions