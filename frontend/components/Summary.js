import React from 'react'
import Logo from '../public/logo.jpg'
import Link from 'next/Link'
import styles from '../styles/Summary.module.css'

const Summary = () => {
  return (
    <article className={styles.summary}>
        <img src={Logo.src} alt="Thumbnail" lazyload={true} />
        <div className={styles.summary_title_cover}>
          <h3> <Link href="https://google.com"><a>Two nabbed for possession of 88 parcels of narcotics they’ve labelled and labbeled taichi</a></Link></h3>
           <span>February 19, 2022</span>
        </div>
    </article>
  )
}

export default Summary