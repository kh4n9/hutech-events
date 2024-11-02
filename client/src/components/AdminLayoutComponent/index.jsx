import React from 'react';
import { Layout, theme } from 'antd';
import AdminHeaderComponent from '../AdminHeaderComponent';
import AdminSiderComponent from '../AdminSiderComponent';


const { Header, Content, Sider } = Layout;

const AdminLayoutComponent = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <AdminHeaderComponent />
      </Header>
      <Layout>
        <Sider
          width={250}
          style={{
            background: colorBgContainer,
          }}
        >
          <AdminSiderComponent colorBgContainer={colorBgContainer} />
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

export default AdminLayoutComponent;
