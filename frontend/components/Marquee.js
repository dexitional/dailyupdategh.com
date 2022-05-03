import React,{ useEffect,useState } from 'react'
import styles from '../styles/Marquee.module.css'
import Link from 'next/Link'

const Marquee = () => {

  const [index,setIndex] = useState(0)
  const data = [
      { title: 'Nigerian sprinter Blessing Okagbare banned for 10 years', link: 'https://3news.com/nigerian-sprinter-blessing-okagbare-banned-for-10-years/' },
      { title: 'Maguire denies reports of Ronaldo captaincy power struggle', link: 'https://3news.com/maguire-denies-reports-of-ronaldo-captaincy-power-struggle/' },
      { title: 'Ghana League assistant referee handed 12 match ban', link: 'https://3news.com/ghana-league-assistant-referee-handed-12-match-ban/' },
  ];

  useEffect(() => {
      setTimeout(() => setIndex(Math.min(data.length-1,index+1) ),4000)
  },[index])

  return (
    <div className={styles.marquee}>
        <span>TRENDING NOW</span>
        <ul className={styles.marquee__ul}>
            { data && data.map( (row,i) => <li key={i} className={ index === i ? styles.show: styles.hide }><Link href={row.link}><a><span>{row.title}</span></a></Link></li> )}
        </ul>
        <div className={styles.marquee__controls}>
            <span onClick={()=> setIndex(Math.max(0,index-1))}>Prev</span>
            <span  onClick={()=> setIndex(Math.min(data.length-1,index+1))}> Next</span>
        </div>
    </div>
  )
}

export default Marquee