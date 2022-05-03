import React from 'react'
import Header from '../components/Header'
import Marquee from '../components/Marquee'
import Banner from '../public/sports_bg.jpeg'
import styles from '../styles/Sports.module.css'

const Sports = () => {
  return (
    <>
      <Header />
      <div className={styles.sports}>
          <img src={Banner.src} className={styles.sports__banner} alt="Banner"/>
          <Marquee />
      </div>
    </>
  )
}

export default Sports