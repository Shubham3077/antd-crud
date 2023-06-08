import React from 'react'
import { Button, Form, Input, Typography } from 'antd';
import {useState} from 'react'
import axios from 'axios'


const Create = () => {
    const { Title } = Typography; 

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

  
    const handleSubmit = (data) => {
        //data is receiving data from the name attribute in the input text field. onFinish prop instead of onSubmit in form.
        console.log(typeof(data))
        axios.post({
            url: "https://6481788729fa1c5c50316f7a.mockapi.io/demo-react-crud",
            
        })
    }
  return (
    <Form onFinish={handleSubmit} style={{marginTop: "40px"}} >
      <Title className="site-layout-content" level={3} >Add details Here</Title>
      <Form.Item label="Name" name="name">
        <Input placeholder="Enter your name" onChange={(event) => setName(event.target.value)} value={name}/>
      </Form.Item>
      <Form.Item label="Age" name="age" >
        <Input type='number' placeholder="Enter your age" onChange={(event) => setAge(event.target.value)} value={age}/>
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type='email' placeholder="Enter your Email"  onChange={(event) => setEmail(event.target.value)} value={email}/>
      </Form.Item>
      <Form.Item >
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default Create;