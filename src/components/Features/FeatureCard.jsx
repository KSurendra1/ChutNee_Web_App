import React from 'react'
import styles from './FeatureCard.module.css'

function FeatureCard({ title, desc }) {
  return (
    <article className={styles['card']} tabIndex={0} aria-label={title}>
      <div className={styles['card__emoji']} aria-hidden>✨</div>
      <h3 className={styles['card__title']}>{title}</h3>
      <p className={styles['card__desc']}>{desc}</p>
    </article>
  )
}

export default React.memo(FeatureCard)