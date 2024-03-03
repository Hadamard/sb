import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
import { Card, Button, Form, Modal, Input, message, Divider } from 'antd';
import { PlusOutlined, TeamOutlined } from '@ant-design/icons';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import RedTable from '@/components/RedTable';
import styles from '../styles.less';

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
     
     
        <Card bordered={false}>
          <div className={styles.tableList}>
        
            <RedTable
         
              data={{
      
              }}
          
            />
          </div>
        </Card>
      
      
      
      
      <a href="https://hadamard.com">
      <button>Go to Destination</button>
    </a>
    </div>
    );
  }
}
export default injectIntl(UserManagement);
