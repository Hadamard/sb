/*
 SPDX-License-Identifier: Apache-2.0
*/
import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';
import { Card, Button, Form, Modal, Input, message, Divider } from 'antd';
import { PlusOutlined, TeamOutlined } from '@ant-design/icons';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import RedTable from '@/components/RedTable';
import styles from '../styles.less';

const FormItem = Form.Item;

const CreateUpdateForm = props => {
  const {
    visible,
    method,
    handleSubmit,
    handleModalVisible,
    confirmLoading,
    organization,
    intl,
  } = props;
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.submit();
  };

  const onFinish = values => {
    handleSubmit(method, values, organization);
  };

  return (
   

@connect(({ organization, loading }) => ({
  organization,
  loadingOrganizations: loading.effects['organization/listOrganization'],
  creatingOrganization: loading.effects['organization/createOrganization'],
}))
class Organization extends PureComponent {
  state = {
    modalVisible: false,
    modalMethod: 'create',
    selectedRows: [],
    formValues: {},
    currentOrganization: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'organization/listOrganization',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'organization/clear',
    });
  }


 
 
  


  

  render() {
    const { selectedRows, modalVisible, modalMethod, currentOrganization } = this.state;
    const {
      organization: { organizations, pagination },
      loadingOrganizations,
      creatingOrganization,
      intl,
    } = this.props;


   
    const columns = [
      {
        title: intl.formatMessage({
          id: 'app.organization.table.header.name',
          defaultMessage: 'Organization Name',
        }),
        dataIndex: 'name',
      },
      {
        title: intl.formatMessage({
          id: 'app.organization.table.header.createTime',
          defaultMessage: 'Create Time',
        }),
        dataIndex: 'created_at',
        render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>,
      },
      {
        title: intl.formatMessage({
          id: 'form.table.header.operation',
          defaultMessage: 'Operation',
        }),
        render: (text, record) => (
          <Fragment>
    <a href="https://billing.stripe.com/p/login/aEU2bs5DY0Sva2ccMM"
  target="_blank"
  rel="noopener noreferrer">
              {intl.formatMessage({ id: 'form.menu.item.update', defaultMessage: 'Change Plan' })}
            </a>
            <Divider type="vertical" />
           
          </Fragment>
        ),
      },
    ];
    const formProps = {
      visible: modalVisible,
      method: modalMethod,
      organization: currentOrganization,
      handleSubmit: this.handleSubmit,
      handleModalVisible: this.handleModalVisible,
      confirmLoading: creatingOrganization,
      intl,
    };
    return (
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
        <Card bordered={false}>
          <div className={styles.tableList}>
        
            <RedTable
              selectedRows={selectedRows}
              loading={loadingOrganizations}
              rowKey="id"
              data={{
                list: organizations,
                pagination,
              }}
              columns={columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleTableChange}
            />
          </div>
        </Card>
        <CreateUpdateForm {...formProps} />
      </PageHeaderWrapper>
    );
  }
}

export default injectIntl(Organization);
