import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';
import styles from './lays.css';





const texts = [">> Hadamard Hyperledger leverages Quantum Key Distribution (QKD) technology to enhance the security of blockchain transactions.",
 ">> By incorporating the Hyperledger project, Hadamard Hyperledger provides a robust and scalable blockchain framework.",
  ">>  The combination of QKD and blockchain in Hadamard Hyperledger ensures superior data privacy and integrity.",
   ">>  With its quantum-resistant cryptographic methods, Hadamard Hyperledger positions itself as a future-proof solution.",
    ">>  The framework can be utilized for various applications."];



    const Typer = () => {
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
    


  export default Typer;
     
