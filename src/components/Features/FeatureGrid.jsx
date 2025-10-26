import React, { useState, useRef, useEffect } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Features.module.css'

function FeatureGrid({ children }) {
  const gridRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState([])
  const { isIntersecting } = useIntersectionObserver(gridRef, {
    threshold: 0.1,
    rootMargin: '100px'
  })

  useEffect(() => {
    if (isIntersecting && children.length > visibleItems.length) {
      // Add more items when grid comes into view
      setVisibleItems(prev => [
        ...prev,
        ...children.slice(prev.length, prev.length + 3)
      ])
    }
  }, [isIntersecting, children])

  return (
    <div ref={gridRef} className={styles['features__grid']}>
      {visibleItems}
    </div>
  )
}

export default React.memo(FeatureGrid)