import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
@connect(({channel, network, node, user, loading }) => ({
  channel,
  node,
  user,
  network,
}))
         
class UserManagement extends PureComponent {
    
componentDidMount() {
  const { dispatch } = this.props;
  dispatch({ type: 'user/fetch' });
  dispatch({ type: 'network/listNetwork' });
  dispatch({ type: 'node/listNode' });
  dispatch({ type: 'channel/listChannel' });
}
  render() {
    
    const {
      user: { users, pagination, currentUser },
      node: { nodes },
      network: { networks },
      channel: { channels }, 
    } = this.props;
   


    console.log(this.props);
   

    return (
     <div>
  <a href="https://billing.stripe.com/p/login/aEU2bs5DY0Sva2ccMM" target="_blank" rel="noopener noreferrer">
    <button>Change Plan</button>
  </a>
</div>

    );
  }
}
export default injectIntl(UserManagement);
