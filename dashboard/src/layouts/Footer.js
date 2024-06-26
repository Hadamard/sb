import React, { Fragment } from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={
        <Fragment>
          Copyright <CopyrightOutlined /> Hadamard Corp.
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
