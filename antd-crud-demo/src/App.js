import {Routes, Route,} from "react-router-dom"
import 'antd/dist/reset.css';
// import {Header} from 'antd'

import GetData from "./Components/Pages/GetData";
import Edit from "./Components/Edit";
import Error404 from "./Components/ErrorPage/Error404";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (

    <>

    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>

      <Route exact path="/home" element={<Home/>}></Route>
      <Route path="/getdata" element={<GetData/>}></Route>
      <Route path="/edit" element={<Edit />}></Route>

      <Route path="*" element={<Error404/>} />
    </Routes>
    
    
    </>
  );
}

export default App;
