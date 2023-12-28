import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';





const texts = [">> It may take up to 24 hours after creating your user account before you can manage your subscriptions or see them.",
 ">> If you have any questions, feel free to contact support."];



    const support = () => {
      const [index, setIndex] = useState(0);
      const [text, setText] = useState("");
      const intervalRef = React.useRef(null);
    
      const magicName = useTypewriter(text);
    
      useEffect(() => {
        if (text === texts[index]) {
          clearInterval(intervalRef.current);
          intervalRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 30000); // Ändert den Text nach 5 Sekunden
        } else {
          setText(texts[index]);
        }
      }, [text, index]);
    
      useEffect(() => {
        return () => {
          clearInterval(intervalRef.current);
        };
      }, []);
    
      return <div className='wrap'>{magicName}</div>;
    };
    


  export default support;
