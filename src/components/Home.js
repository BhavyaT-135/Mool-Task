import moolLogo from '../assets/mool-logo.svg';
import 'antd/dist/antd.min.css';
import { HomeTwoTone, BellOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
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
        <div className="logo">
          <img src={moolLogo} alt="logo" style={{
            width: '40%',
            marginLeft: '8%',
            marginTop: '12%',
          }} />
        </div>
        <Button type='primary' icon={<HomeTwoTone twoToneColor='#5d77e2' />} size='large' style={{
          textAlign: 'left',
          width: '90%',
          marginLeft: '5%',
          marginTop: '35%',
          backgroundColor: '#405CD2',
        }}> Home </Button>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            backgroundColor: "#f7f7fa",
            padding: 0,
            borderBottom: '3px solid #e8e8e8',
          }}
        >
          <div className='header-flexbox'>
            <div className='header-flexbox-left'>
              <HomeTwoTone twoToneColor='#5d77e2' style={{
                fontSize: '20px',
                marginTop: '22px',
              }} />
              <h2 className='header-flexbox-text'>Home</h2>
            </div>
            <div className='header-flexbox-right'>
              <BellOutlined style={{ fontSize: '20px', marginTop: '22px' }} />
              <QuestionCircleOutlined style={{ fontSize: '20px', marginTop: '22px' }} />
              <SettingOutlined style={{ fontSize: '20px', marginTop: '22px' }} />
                <div className='user-circle'>
                <UserOutlined style={{ fontSize: '20px', marginTop: '22px', color: 'white' }} />
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            backgroundColor: "#f7f7fa",
          }}
        >
          <h1>This is the content section!</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;