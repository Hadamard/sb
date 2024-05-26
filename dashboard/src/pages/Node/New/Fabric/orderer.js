import React from 'react';
import { Form, Button } from 'antd';
import { injectIntl } from 'umi';
import classNames from 'classnames';
import styles from '../styles.less';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

class FabricOrderer extends React.PureComponent {
  render() {
    const { prevBtn, creating, intl } = this.props;
    return (
      <Form layout="horizontal" className={classNames(styles.stepForm, styles.stepInputForm)}>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
          label=""
        >
          {prevBtn}
          <Button type="primary" style={{ marginLeft: 8 }} loading={creating}>
            {intl.formatMessage({
              id: 'form.button.submit',
              defaultMessage: 'Submit',
            })}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default injectIntl(FabricOrderer);
