import { useEffect, useState, useCallback } from 'react'

export function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  const callback = useCallback(([entry]) => {
    setIntersecting(entry.isIntersecting)
    if (entry.isIntersecting && !hasIntersected) {
      setHasIntersected(true)
    }
  }, [hasIntersected])

  useEffect(() => {
    if (!ref?.current) return

    const observer = new IntersectionObserver(callback, {
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? '0px',
      threshold: options.threshold ?? 0
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options.root, options.rootMargin, options.threshold, callback])

  return { isIntersecting, hasIntersected }
}