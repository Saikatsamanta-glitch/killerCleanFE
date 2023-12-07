import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomFooter from './Components/CustomFooter'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Services from './Pages/Services'
import CleaningChecklist from './Pages/CleaningChecklist'
import Contact from './Pages/Contact'
import Book from './Pages/Book'
import FAQ from './Pages/FAQ'
import Cancel from './Pages/Cancel'
import Success from './Pages/Success'

 const App = () => {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
                // Simulate fetching data (replace with your actual data fetching logic)
                const fetchData = async () => {
                  // Simulate a delay (replace with actual data fetching logic)
                  await new Promise(resolve => setTimeout(resolve, 2000));
            
                  // Set the fetched data
                  setLoading(false);
                };
            
                fetchData();
              }, []);
        return (
                <BrowserRouter>
                {loading ? (
                  <Preloader />
                ) : (
                  <>
                    <Nav />
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/services' element={<Services />} />
                      <Route path='/cleaningchecklist' element={<CleaningChecklist />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/book' element={<Book />} />
                      <Route path='/faq' element={<FAQ />} />
                      <Route path='/cancel' element={<Cancel />} />
                      <Route path='/success' element={<Success />} />
                    </Routes>
                    <CustomFooter />
                  </>
                )}
              </BrowserRouter>
        )
}

export default App;