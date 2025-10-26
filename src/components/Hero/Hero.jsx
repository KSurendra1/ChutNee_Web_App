import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero-illustration.svg'
import LazyImage from '../common/LazyImage'

export default function Hero() {
  return (
    <section className={styles['hero']} aria-label="ChutNee hero">
      <div className={styles['hero__inner']}>
        <div className={styles['hero__content']}>
          <h1 className={styles['hero__title']}>ChutNee — Delightful experiences, mobile-first</h1>
          <p className={styles['hero__lead']}>Pixel-perfect UI, crisp CSS animations, and fast performance across devices.</p>
          <div className={styles['hero__actions']}>
            <button className={styles['btn']}>Try ChutNee</button>
            <a className={styles['hero__secondary']} href="#features">Learn more</a>
          </div>
        </div>
        <div className={styles['hero__visual']}>
          <LazyImage src={heroImg} alt="Product illustration" className={styles['hero__image']} />
        </div>
      </div>
    </section>
  )
}