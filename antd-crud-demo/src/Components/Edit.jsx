import React from 'react'
import { Button, Form, Input, Typography, } from 'antd';
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/reset.css';
import { useNavigate , Link} from 'react-router-dom';



const Edit = () => {
    const Title = Typography;
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem('id'));  //getItem is used to retrieve data from local storage
        setName(localStorage.getItem('name'));  
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    }, [])
    const handleUpdate = (data) => {
        const payload={
            name,
            email,
            age
        }
        //this data is recieved by submit form as a object after onFinish prop.
        console.log(payload);
        axios.put(`https://6481788729fa1c5c50316f7a.mockapi.io/demo-react-crud/${id}`, 
            payload, 
        ).then (() => {
            navigate('/getdata');
        })
    }

  return (
    <>
        <Form onFinish={handleUpdate} style={{marginTop: "40px"}} >
        <Title className="site-layout-content" level={3} >Update your details</Title>
        <Form.Item label="Name" >
            <Input placeholder="Enter your name"  onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Item>
        <Form.Item label="Age"  >
            <Input type='number' placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} value={age} />
        </Form.Item>
        <Form.Item label="Email" >
            <Input type='email' placeholder="Enter your Email"  onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Item>
        <Form.Item >
            <Button htmlType="submit">Update</Button>

            <Link to={'/getdata'}>
            <Button htmlType="submit">Back</Button>
            </Link>
        </Form.Item>
        </Form>
    </>
  )
}

export default Edit;