import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
@connect(({channel, network, node, user, organization, loading }) => ({
  channel,
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
      type: 'channel/listChannel',

    });
       
   
  }
  render() {
    
    const {
      user: { users, pagination, currentUser },
      organization: { organizations },
      node: { nodes },
      network: { networks },
      channel: { channels }, 
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
