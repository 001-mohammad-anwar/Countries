
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { useState } from "react";
const App = () => {
  const[isdark , setIsdark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
              <Header theme={[isdark , setIsdark]}/>
              <Outlet context={[isdark , setIsdark]}/>
    </>
  )
}

export default App
