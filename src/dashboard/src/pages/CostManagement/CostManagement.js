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
       type: 'network/listNetwork',
      type: 'node/listNode',

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
   
     
   
    console.log(this.props);

    
    return (
      <div>
      {/* Hier können Inhalte hinzugefügt werden, wenn benötigt */}
    </div>
    );
  }
}
export default injectIntl(UserManagement);
