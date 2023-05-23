import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div></div>
        <div>
          <Link to="/about" className={styles.navbarLinks}>About</Link>
          <Link to="/projects" className={styles.navbarLinks}>Projects</Link>
          <Link to="/links" className={styles.navbarLinks}>Links</Link>
        </div>
      </nav>
    </>

  )
}

export default Navbar