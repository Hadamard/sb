import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
@connect(({ network, node, user, organization, loading }) => ({
  node,
  user,
  organization,
  network,
}))
         
class UserManagement extends PureComponent {
    
  componentDidMount() {
    const { dispatch } = this.props;

     dispatch({
      type: 'user/fetch',

    });
        dispatch({
      type: 'network/listNetwork',

    });
   
  }
  render() {
    
    const {
      user: { users, pagination, currentUser },
      organization: { organizations },
      node: { nodes },
      network: { networks },
      dispatch,
      intl,
    } = this.props;
   
     
   
   
   console.log(users);
   console.log(currentUser.username);
   console.log(networks);
    
    return (
      <div>
      {/* Hier können Inhalte hinzugefügt werden, wenn benötigt */}
    </div>
    );
  }
}
export default injectIntl(UserManagement);
