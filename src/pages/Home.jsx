import React, { Suspense } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import PageTransition from '../components/common/PageTransition'
import { TextSkeleton } from '../components/common/Skeleton'
import styles from './Home.module.css'

// Skeleton loaders for components
const HeroSkeleton = () => (
  <div className={styles.heroSkeleton}>
    <TextSkeleton lines={2} />
    <div className={styles.heroActions}>
      <div className={styles.buttonSkeleton} />
    </div>
  </div>
)

const FeaturesSkeleton = () => (
  <div className={styles.featuresSkeleton}>
    <TextSkeleton lines={1} />
    <div className={styles.featuresGrid}>
      {[1, 2, 3].map(i => (
        <div key={i} className={styles.featureCard}>
          <TextSkeleton lines={2} />
        </div>
      ))}
    </div>
  </div>
)

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Header />
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<FeaturesSkeleton />}>
          <Features />
        </Suspense>
        <Footer />
      </main>
    </PageTransition>
  )
}