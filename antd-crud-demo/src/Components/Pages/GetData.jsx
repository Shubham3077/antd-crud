
import React from 'react'
import {DeleteFilled, EditTwoTone } from "@ant-design/icons";
import {Space, Table, Typography, } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useState, useEffect} from "react"


//== useEffect - performs a task/function every time any value or state changes in a component.



const GetData = () => {
  const [incData, setIncData] = useState([]); //incoming data
  const {Title} = Typography;

  // const myData = incData.filter(item => item.studentId !== id);

  const arr_data = () => {
    axios.get("https://6481788729fa1c5c50316f7a.mockapi.io/demo-react-crud") //this returns a promise which is then handled by the .then property
    .then((res) => {
      setIncData(res.data);
    })
  }
  useEffect(()=> {
    arr_data();
  }, [])

  // const arr = incData.map((item) => {
  //   return item.id
  // })
  // console.log(typeof(arr))  // here the type is shown is object although it is a array.
  // const arr = arr_data.map((e, ) => {
  //   return index;
  // })

  // console.log(arr);
  
  const columns = [
       
    {
        title: 'Name',
        dataIndex: 'name',
        key: '1'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: '2'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: '3'
    },
    {
        title: 'Action',
        key: 'action',
        render: (value, record) => (
          <Space size="middle">
            <Link to="/edit">
            <button type="link" onClick={() => handleEditBtn(record.id, record.name, record.age, record.email)}><EditTwoTone /></button>
            </Link>
            <button type='link' onClick={() => handleDelete(record.id)}><DeleteFilled /></button>
          </Space>
        ),
      },
]

const handleEditBtn = (id, name, age, email) => {
  localStorage.setItem( 'id', id);  // setItem always store values in a key value pair 
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('email',email);  

}

const handleDelete=(Id)=>{
  console.log(Id) 
  axios.delete(
    `https://6481788729fa1c5c50316f7a.mockapi.io/demo-react-crud/${Id}`)
    .then((res) => {
      arr_data()
    })
  
}

  
  return (
    <div >
      <Title level={3}>List of people</Title>
      <Table dataSource={incData} columns={columns} style={{width:" 60%", marginTop: '40px'}} ></Table>
    </div>
  )
}

export default GetData