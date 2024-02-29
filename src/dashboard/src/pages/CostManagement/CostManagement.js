import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
import {Card,Button,Form,Modal,Input,Select,message,Dropdown,Menu,AutoComplete,} from 'antd';

@connect(({ node, user, organization, loading }) => ({
  node,
  user,
  organization,
  loadingNodes: loading.effects['node/listNode'],
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
    const { modalVisible, modalMethod, selectedRows, targetNodeId } = this.state;
    const {
      user: { users, pagination, currentUser },
      organization: { organizations },
      loadingUsers,
      node: { nodes },
      loadingNodes,
      network: { networks },
      loadingNetworks,
      creatingUser,
      dispatch,
      intl,
    } = this.props;
   
     
   

   
   console.log(users);
   console.log(currentUser.username);
   console.log(nodes);
   

    
    return (
      <div>
      {/* Hier können Inhalte hinzugefügt werden, wenn benötigt */}
    </div>
    );
  }
}
export default injectIntl(UserManagement);
