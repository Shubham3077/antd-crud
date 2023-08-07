import React from 'react'

import { Layout, Menu, Typography,  } from 'antd';

import PostData from './PostData';



const Home = () => {

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="layout" >
      
      <Content style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px', color: "blue" }}>

      <PostData />
      
      </Content>
      <Footer style={{ textAlign: 'center' }}>Shubham Demo Project - Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};



  


export default Home