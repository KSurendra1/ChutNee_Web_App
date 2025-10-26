import React, { Suspense, lazy } from 'react'
import PerformanceMonitor from './components/PerformanceMonitor'
import { TextSkeleton } from './components/common/Skeleton'
import styles from './App.module.css'

// Lazy load the Home page
const Home = lazy(() => import('./pages/Home'))

const PageSkeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.header}>
      <TextSkeleton lines={1} />
    </div>
    <div className={styles.content}>
      <TextSkeleton lines={3} />
    </div>
  </div>
)

export default function App() {
  return (
    <div className="app-root">
      <PerformanceMonitor />
      <Suspense fallback={<PageSkeleton />}>
        <Home />
      </Suspense>
    </div>
  )
}