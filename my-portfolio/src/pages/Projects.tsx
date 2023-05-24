import React from 'react'
import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  return (
    <div className={styles.body}>
      <div className={styles.aboutProjectsText}>  
        <p className={styles.myProjectsLabel}>My projects</p>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard 
          image='THIS IS WHERE THE IMAGE SHOULD BE'
          projectName='AaronBot' 
          projectInfo='A discord bot written in TypeScript using the discord.js API to create special commands for personal use.'
        />

      </div>
    </div>
  )
}

export default Projects