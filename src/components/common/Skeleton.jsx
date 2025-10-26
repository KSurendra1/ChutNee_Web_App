import React from 'react'
import styles from './Skeleton.module.css'

export function Skeleton({ width = '100%', height = '20px', className = '' }) {
  return (
    <div 
      className={`${styles.skeleton} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}

export function TextSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i}
          width={i === lines - 1 ? '70%' : '100%'}
          className={styles.textLine}
        />
      ))}
    </div>
  )
}