import React from 'react';
import { Layout, theme } from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../SiderComponent';


const { Header, Content, Sider } = Layout;

const LayoutComponent = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <HeaderComponent />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <SiderComponent colorBgContainer={colorBgContainer} />
        </Sider>
        <Layout
          style={{
            padding: '24px 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
