import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import ProjectCard from '../components/ProjectCard';
const Home = () => {
  const fullText = "My vivid imagination would lead me to believe that I am Batman, but all I really am is regular computer science student at UNSW, I promise..";
  const [text, setText] = useState('');

  useEffect(() => {
    let timerId: any = null;
    if (text.length < fullText.length) {
      timerId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 25);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [text, setText, fullText]);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.about}>
          <p><span className={styles.hello}>Hello,</span> I'm<span className={styles.name}> Aaron!</span>
            <br />{text}
            {text === fullText && <span className={styles.blinkingCursor}>.</span>}
          </p>
        </div>
        <ProjectCard image='THIS IS WHERE THE IMAGE SHOULD BE' projectName='AaronBot' projectInfo='A discord bot written in TypeScript using the discord.js API to create special commands for personal use.'/>
      </div>
    </>
  )
}

export default Home;
