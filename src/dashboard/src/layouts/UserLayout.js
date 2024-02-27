import React, { Component, Fragment } from 'react';
import { Link, connect } from 'umi';
import GlobalFooter from '@/components/GlobalFooter';
import DocumentTitle from 'react-document-title';
import SelectLang from '@/components/SelectLang';
import getPageTitle from '@/utils/getPageTitle';
import styles from './UserLayout.less';
import { GoogleLogin } from 'react-google-login';
import MicrosoftLogin from "react-microsoft-login";
import Typer from '@/layouts/Typer';
import './lays.css';

const links = [];

const copyright = <Fragment>Hadamard Corporation © 2024</Fragment>;


const clientId = "553897053296-fu5one4f5jfjj99hfc8ak35c8i4d3fsg.apps.googleusercontent.com";

const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('Login Failed:', res);
   
  };


const authHandler = (err, data) => {
    console.log(err, data);
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

<div style={{ display: 'flex', justifyContent: 'center' }}>

      <GoogleLogin className='googlelogin' style={{ marginRight: '50px' }}
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />

         <MicrosoftLogin clientId={"fe365654-42b9-4a60-a638-bdc9599c6f42"} authCallback={authHandler} />
        </div>




    
          <Typer style={{ marginTop: '20px' }} ></Typer>
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
