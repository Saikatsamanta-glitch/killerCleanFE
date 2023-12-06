import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomFooter from './Components/CustomFooter'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Services from './Pages/Services'
import CleaningChecklist from './Pages/CleaningChecklist'
import Contact from './Pages/Contact'
import Book from './Pages/Book'
import FAQ from './Pages/FAQ'
import Products from './Components/PaymentForm'

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/cleaningchecklist' element={<CleaningChecklist />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/book' element={<Book />}/>
      <Route path='/faq' element={<FAQ />} />
      {/* <Route path='/paymentform' element={<Products />}/> */}
    </Routes>
    <CustomFooter/>
    </BrowserRouter>
  )
}
