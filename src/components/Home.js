import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <h1>This is the sider section!</h1>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            backgroundColor: "rgb(240 242 245)",
            padding: 0,
          }}
        >
          <h1>This is the header section!</h1>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <h1>This is the content section!</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;