import Navbar from "./component/Navbar";
import Aboutus from "./component/Aboutus";
import Form from "./component/Form";
import Alert from "./component/Alert";
import Github from "./component/Github"


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import { useState } from "react";

function App(){
  const [mode,setMode] =useState ('light');
  const [alert,setAlert]=useState(null)

  const showAlert = (type,message)=>{
    setAlert({type:type,message:message})

    setTimeout(function(){
      setAlert(null)
    },2500)
  }

 const handleMode =()=>{
  if (mode ==='dark'){
    setMode('light');
    showAlert('success','light mode is enadled')
  }
  else {
    setMode('dark')
    showAlert('success','dark mode is enadled')
  }
 }
 
  return(
    <>

<BrowserRouter>

    <Navbar  aboutUsTitle="about me" tittle="Info" hometittle="Homepage" tittles="github" mode={mode} handleMode={handleMode}/>
    <Alert alert={alert}/>
   

<Routes>
    <Route path='/' element={<Form showAlert ={showAlert} mode={mode} uperCaseBttn="upgrade to Uppercase"/>} />
    <Route path='About us'element={< Aboutus mode={mode}/>} />
    <Route path='Github' element={< Github />} />

 </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
 
