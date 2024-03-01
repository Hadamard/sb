import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl, history  } from 'umi';


@connect(({ network, loading }) => ({
  network,
  loadingNetworks: loading.effects['network/listNetwork'],
}))
         
class UserManagement extends PureComponent {
    

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'network/listNetwork',
    });
  }

  render() {
    
   const {
      network: { networks, pagination },
      loadingNetworks,
      intl,
    } = this.props;
   
     
   

   
    console.log(network/listNetwork);
   console.log(networks);

    
    return (
      <div>
      {/* Hier können Inhalte hinzugefügt werden, wenn benötigt */}
    </div>
    );
  }
}
export default injectIntl(UserManagement);
