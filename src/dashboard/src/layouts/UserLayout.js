import React, { Component, Fragment, useState, useEffect } from 'react';
import { Link, connect } from 'umi';
import GlobalFooter from '@/components/GlobalFooter';
import DocumentTitle from 'react-document-title';
import SelectLang from '@/components/SelectLang';
import getPageTitle from '@/utils/getPageTitle';
import styles from './UserLayout.less';

const links = [];

const copyright = <Fragment>Hadamard Corporation © 2024</Fragment>;

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



function TextWechsler() {
    const [text, setText] = useState('Anfangstext');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText === 'Text 1' ? 'Text 2' : 'Text 1');
        }, 10000); // 10000 Millisekunden = 10 Sekunden

        return () => clearInterval(interval); // Bereinigen
    }, []);


  
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
            {text}
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
