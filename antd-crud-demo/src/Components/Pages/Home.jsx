import React from 'react'

import { Layout, Menu, Typography,  } from 'antd';

import PostData from './PostData';



const Home = () => {

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="layout" >
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        
        <Menu theme="dark" mode="horizontal"/>

        <div style={{textAlign: 'center'}}>
        <Title level={2} style={{ color: 'white' }}> React CRUD</Title>
        </div>
      </Header>
      <Content style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px', color: "blue" }}>

      <PostData />
      
      </Content>
      <Footer style={{ textAlign: 'center' }}>Shubham Demo Project - Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};



  


export default Home