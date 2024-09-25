import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Home from './Component/Home'

function App() {
  const [opensidebarToggle,setOpensidebarToggle]=useState(false);
  const opensidebar=()=>{
    setOpensidebarToggle(!opensidebarToggle)
  }

  return (
   <div className='grid-container'>
      <Header opensidebar={opensidebar}/>
      <Sidebar opensidebarToggle={opensidebarToggle} opensidebar={opensidebar}/>
      <Home/>
   </div>
  )
}

export default App
