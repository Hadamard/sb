import React, { PureComponent, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import RedTable from '@/components/RedTable';
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
    console.log(currentUser.organization);
    
    return (
      <div>
      <PageHeaderWrapper
        title={
          <span>
            {<TeamOutlined style={{ marginRight: 15 }} />}
            {intl.formatMessage({
              id: 'app.organization.title',
              defaultMessage: 'Organization Management',
            })}
          </span>
        }
      >
     
      </PageHeaderWrapper>
    </div>
    );
  }
}
export default injectIntl(UserManagement);
