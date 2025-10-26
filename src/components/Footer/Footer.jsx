import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <p className={styles['footer__copy']}>© {new Date().getFullYear()} ChutNee — Built with care.</p>
        <nav className={styles['footer__nav']}>
          <a href="#" className={styles['footer__link']}>Privacy</a>
          <a href="#" className={styles['footer__link']}>Terms</a>
        </nav>
      </div>
    </footer>
  )
}