import React from 'react'
import styles from '../styles/ProjectCard.module.css'

interface ProjectCardProps {
	image: string;
	projectName: string;
	projectInfo: string;
	repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image , projectName , projectInfo }) => {
  return (
    <div className={styles.cardContainer} >
			<div className={styles.imageContainer}>
				<img src={image} alt='Just some text'></img>
			</div>
			<div className={styles.projectInformationContainer}>
				<div className={styles.projectName}>{projectName}</div>
				<div className={styles.projectInfo}>{projectInfo}</div>
			</div> 
    </div>
  )
}

export default ProjectCard