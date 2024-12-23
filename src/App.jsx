import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Option from './components/option'
import Products from './components/products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Path from './components/Routes'
function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Option></Option>
      <Body></Body>
      <Path></Path>
    </div>
  )
}

export default App
