import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
const Home = () => {
  const fullText = "As much as I like to say that I'm Batman, I'm just a regular computer science student at UNSW, I promise..";
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
      </div>
    </>
  )
}

export default Home;
