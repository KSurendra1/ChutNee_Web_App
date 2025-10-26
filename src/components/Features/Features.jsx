import React, { useMemo } from 'react'
import FeatureCard from './FeatureCard'
import FeatureGrid from './FeatureGrid'
import styles from './Features.module.css'

const features = [
  { id: 1, title: 'Pixel-perfect UI', desc: 'Design fidelity with responsive layout and consistent spacing.' },
  { id: 2, title: 'Pure CSS Animations', desc: 'GPU-friendly keyframes & transitions under 400ms.' },
  { id: 3, title: 'Mobile-first', desc: 'Built to look great on phones and scales up to desktop.' }
]

export default function Features() {
  // Memoize feature cards to prevent unnecessary re-renders
  const featureCards = useMemo(() => 
    features.map(f => (
      <FeatureCard key={f.id} title={f.title} desc={f.desc} />
    )),
    [] // Dependencies array is empty since features are static
  )

  return (
    <section id="features" className={styles['features']}>
      <div className={styles['features__inner']}>
        <h2 className={styles['features__title']}>What ChutNee offers</h2>
        <FeatureGrid>
          {featureCards}
        </FeatureGrid>
      </div>
    </section>
  )
}