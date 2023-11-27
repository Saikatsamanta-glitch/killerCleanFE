import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomFooter from './Components/CustomFooter'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Services from './Pages/Services'
import CleaningChecklist from './Pages/CleaningChecklist'
import ApplyNow from './Pages/ApplyNow'
import CustomerLogin from './Pages/CustomerLogin'
import Contact from './Pages/Contact'
import Book from './Pages/Book'

export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/cleaningchecklist' element={<CleaningChecklist />} />
      <Route path='/customerlogin' element={<CustomerLogin />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/applynow' element={<ApplyNow />} />
      <Route path='/book' element={<Book />}/>
    </Routes>
    <CustomFooter/>
    </BrowserRouter>
  )
}
