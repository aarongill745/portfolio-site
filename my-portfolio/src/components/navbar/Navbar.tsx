import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.myName}>Aaron Gill</h1>
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