import React, { useState, useEffect } from 'react'
import styles from './PageTransition.module.css'

export default function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger enter animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.page} ${isVisible ? styles.visible : ''}`}>
      {children}
    </div>
  )
}