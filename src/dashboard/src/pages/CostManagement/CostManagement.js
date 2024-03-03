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
    <Modal
      destroyOnClose
      title={intl.formatMessage({
        id: `app.organization.form.${method === 'create' ? 'new' : 'update'}.title`,
        defaultMessage: 'New Organization',
      })}
      visible={visible}
      confirmLoading={confirmLoading}
      width="50%"
      onOk={onSubmit}
      onCancel={() => handleModalVisible()}
    >
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          name: method === 'create' ? '' : organization.name,
        }}
      >
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label={intl.formatMessage({
            id: 'app.organization.form.name.label',
            defaultMessage: 'Organization Name',
          })}
          name="name"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: 'app.organization.form.name.required',
                defaultMessage: 'Please input organization name',
              }),
              min: 1,
            },
          ]}
        >
          <Input
            placeholder={intl.formatMessage({
              id: 'form.input.placeholder',
              defaultMessage: 'Please input',
            })}
          />
        </FormItem>
      </Form>
    </Modal>
  );
};

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

  handleModalVisible = visible => {
    if (!visible) {
      this.setState({
        modalMethod: 'create',
        currentOrganization: {},
      });
    }
    this.setState({
      modalVisible: !!visible,
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };



 
  deleteCallback = data => {
    const { code, payload } = data;
    const { intl } = this.props;
    const { name } = payload;
    if (code) {
      message.error(
        intl.formatMessage(
          {
            id: 'app.organization.delete.fail',
            defaultMessage: 'Delete organization {name} failed',
          },
          {
            name,
          }
        )
      );
    } else {
      message.success(
        intl.formatMessage(
          {
            id: 'app.organization.delete.success',
            defaultMessage: 'Delete organization {name} success',
          },
          {
            name,
          }
        )
      );
      this.handleFormReset();
    }
  };

  handleSubmit = (method, values, record) => {
    const { dispatch } = this.props;
    switch (method) {
      case 'create':
        dispatch({
          type: 'organization/createOrganization',
          payload: values,
          callback: this.createCallback,
        });
        break;
      case 'update':
        dispatch({
          type: 'organization/updateOrganization',
          payload: {
            ...values,
            id: record.id,
          },
          callback: this.updateCallback,
        });
        break;
      default:
        break;
    }
  };

  handleFormReset = () => {
    const { dispatch } = this.props;
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'organization/listOrganization',
    });
  };

  handleTableChange = pagination => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    const { current, pageSize } = pagination;
    const params = {
      page: current,
      per_page: pageSize,
      ...formValues,
    };
    dispatch({
      type: 'organization/listOrganization',
      payload: params,
    });
  };

  

  showUpdate = record => {
    const { handleModalVisible } = this;
    this.setState(
      {
        currentOrganization: record,
        modalMethod: 'update',
      },
      () => {
        handleModalVisible(true);
      }
    );
  };

  

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
