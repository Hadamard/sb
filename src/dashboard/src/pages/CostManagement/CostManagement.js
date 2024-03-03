import React, { PureComponent, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import RedTable from '@/components/RedTable';
import { PlusOutlined, TeamOutlined } from '@ant-design/icons';
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
   
  const MyButton = () => {
  const redirectToUrl = (url) => {
    window.location.href = url;
  };
   
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
              defaultMessage: 'Cost Management',
            })}
          </span>
        }
      >
      <button onClick={() => redirectToUrl('/destination-url')}>
      Go to Destination
    </button>
      </PageHeaderWrapper>
    </div>
    );
  }
}
export default injectIntl(UserManagement);
