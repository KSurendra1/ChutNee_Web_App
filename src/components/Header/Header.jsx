import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/logo.svg'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles['header']}> 
      <div className={styles['header__inner']}> 
        <img src={Logo} alt="ChutNee logo" className={styles['header__logo']} />
        <nav className={styles['header__nav'] + (open ? ' ' + styles['header__nav--open'] : '')}>
          <a href="#features" className={styles['header__link']}>Features</a>
          <a href="#about" className={styles['header__link']}>About</a>
          <a href="#contact" className={styles['header__link']}>Contact</a>
        </nav>
        <button className={styles['header__cta']}>Get Started</button>
        <button
          className={styles['header__burger']}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}