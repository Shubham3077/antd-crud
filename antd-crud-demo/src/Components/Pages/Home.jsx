import React from 'react'

import { Layout, Menu, Typography, Table, Space,  } from 'antd';
import {DeleteFilled, EditTwoTone } from "@ant-design/icons"
import { Col, Row } from 'antd';
import Create from '../Create';



const Home = () => {

    const { Header, Content, Footer } = Layout;
    const { Title } = Typography;
    
    const data = [ // data is array of objects
        {
            name: "Random 1", 
            age: 23, 
            email: "random1@gmail.com",
            key: 1,
        }, 
        {
            name: "Random 2", 
            age: 55, 
            email: "random2@gmail.com",
            key: 2,
        }, 
        {
            name: "Random 1", 
            age: 26, 
            email: "random3@gmail.com",
            key: 3,
        }, 
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'key'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <a><EditTwoTone /></a>
                <a><DeleteFilled /></a>
              </Space>
            ),
          },
    ]
    

  return (
    <Layout className="layout" >
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        
        <Menu theme="dark" mode="horizontal"/>

        <div style={{textAlign: 'center'}}>
        <Title level={2} style={{ color: 'white' }}> React CRUD</Title>
        </div>
      </Header>
      <Content style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px', color: "blue" }}>

      <Row >
        <Col span={12}>
            
            <Create/>
        </Col>
        <Col span={12}>
            <Table dataSource={data} columns={columns} style={{width:" 60%", marginTop: '40px'}} ></Table>
        </Col>
      </Row>

        
        
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>Shubham Demo Project - Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};



  


export default Home