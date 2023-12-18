import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link, connect } from 'umi';
import GlobalFooter from '@/components/GlobalFooter';
import DocumentTitle from 'react-document-title';
import SelectLang from '@/components/SelectLang';
import getPageTitle from '@/utils/getPageTitle';
import styles from './UserLayout.less';
import useTypewriter from 'react-typewriter-hook';
import styles from './lays.css';


const links = [];

const copyright = <Fragment>Hadamard Corporation © 2024</Fragment>;





const texts = [">> Hadamard Hyperledger leverages Quantum Key Distribution (QKD) technology to enhance the security of blockchain transactions.",
 ">> By incorporating the Hyperledger project, Hadamard Hyperledger provides a robust and scalable blockchain framework.",
  ">>  The combination of QKD and blockchain in Hadamard Hyperledger ensures superior data privacy and integrity.",
   ">>  With its quantum-resistant cryptographic methods, Hadamard Hyperledger positions itself as a future-proof solution.",
    ">>  The framework can be utilized for various applications."];







    const Typewriter = () => {
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
    

     
    
    
    class UserLayout extends Component {
      componentDidMount() {
        const {
          dispatch,
          route: { routes, authority },
        } = this.props;
        dispatch({
          type: 'menu/getMenuData',
          payload: { routes, authority },
        });
      }

      render() {
        const {
          children,
          location: { pathname },
          breadcrumbNameMap,
        } = this.props;
        return (
          <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
            <div className={styles.container}>
              <div className={styles.lang}>
                <SelectLang />
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.header}>
                    <Link to="/">
                      <span className={styles.title}>Hadamard Dashboard</span>
                    </Link>
                  </div>
                  <div className={styles.desc}>Dashboard for Managing Hadamard Hyperledger</div>
                </div>
                {children}
              </div>
             
               <GlobalFooter links={links} copyright={copyright} />
            </div>
          </DocumentTitle>
        );
      }
    }
    
    export default connect(({ menu: menuModel }) => ({
      menuData: menuModel.menuData,
      breadcrumbNameMap: menuModel.breadcrumbNameMap,
    }))(UserLayout);
