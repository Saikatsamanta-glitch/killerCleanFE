import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomFooter from './Components/CustomFooter'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Services from './Pages/Services'

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
    </Routes>
    <CustomFooter/>
    </BrowserRouter>
  )
}
