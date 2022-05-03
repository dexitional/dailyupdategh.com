import React from 'react'
import styles from '../styles/Header.module.css';
import Link from 'next/Link';
import Logo from '../public/logo.jpg';
console.log(Logo)
const Header = () => {
  return (
    <header className="header">
        {/* Top Nav */}
       <div className={styles.header__topnav}>
           <div className={styles.header__topnav_cover}>
            <span className="header__date">Saturday, February 19, 2022</span>
            <div className={styles.header__socials}>
                <Link href="" className="header__social_fa"><span>Fa</span></Link>
                <Link href="" className="header__social_in"><span>In</span></Link>
                <Link href="" className="header__social_tw"><span>Tw</span></Link>
                <Link href="" className="header__social_yt"><span>Yt</span></Link>
            </div>
           </div>
       </div>

       {/* Logo & Ads */}
       <div className={styles.header__midnav}>
         <div className={styles.header__midnav_cover}>
            <div className={styles.header__logo}>
                <img src={Logo.src} lazyload="true" alt="Logo"/>
            </div>
            <div className={styles.header__topad}>
                <span> Advertise your products here!</span>
            </div>
         </div>
       </div>

       {/* Navbar */}
       <nav className={styles.header__mainav}>
          <div className={styles.header__mainav_cover}>
            {/* Stick Logo */}
            <img className={styles.header__stickylogo} src={Logo.src} alt="Logo" lazyload="true"/>
            {/* Main Navigation */}
            <ul class={styles.header__navul}>
                <li className={styles.active}><Link href="/"><span>HOME</span></Link></li>  
                <li><Link href=""><span>NEWS</span></Link></li>  
                <li><Link href=""><span>BUSINESS</span></Link></li>  
                <li><Link href=""><span>ENTERTAINMENT</span></Link></li>  
                <li><Link href=""><span>SPORTS</span></Link></li>  
                <li><Link href=""><span>WORLD</span></Link></li>  
            </ul>
            {/* SearchBar */}
            <span className={styles.header__searchbtn}>Se</span>
            <div className={styles.header__search_cover}>
                 <input type="text" name="search" placeholder="Search Keyword ..." />
                 <button type="submit">Search</button>
            </div>
          </div>
       </nav>
    </header>
  )
}

export default Header