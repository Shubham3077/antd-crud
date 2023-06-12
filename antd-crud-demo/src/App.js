import {Routes, Route} from "react-router-dom"
import 'antd/dist/reset.css';
// import {Header} from 'antd'
import Home from './Components/Pages/Home';
import GetData from "./Components/Pages/GetData";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/getdata" element={<GetData/>}></Route>
      <Route path="/edit" element={<Edit />}></Route>
    </Routes>
    
    
    </>
  );
}

export default App;
