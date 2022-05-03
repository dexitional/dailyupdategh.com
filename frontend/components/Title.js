import React from 'react'
import styles from '../styles/Title.module.css';

const Title = ({ heading }) => {
  return (
     <div className={styles.title}>
         <h2>{heading}</h2>
         <div className={styles.title__lines}>
             <span></span>
             <span></span>
         </div>
     </div>
  )
}

export default Title