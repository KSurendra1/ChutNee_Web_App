import React, { useEffect, useRef, useState } from 'react'

function LazyImage({ src, alt, className, placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E' }) {
  const imgRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      className={`${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      onLoad={() => setIsLoaded(true)}
      style={{
        transition: 'opacity 0.2s ease-in-out',
        opacity: isLoaded ? 1 : 0
      }}
    />
  )
}

export default React.memo(LazyImage)