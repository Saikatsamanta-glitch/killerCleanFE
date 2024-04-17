import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomFooter from "./Components/CustomFooter";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import CleaningChecklist from "./Pages/CleaningChecklist";
import Contact from "./Pages/Contact";
import Book from "./Pages/Book";
import FAQ from "./Pages/FAQ";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";
import Phone from './Components/Phone';
import Termsservices from './Pages/Terms_services';

const App = () => {
        return (
                <BrowserRouter>
                        <Nav />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/cleaningchecklist" element={<CleaningChecklist />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/book" element={<Book />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/cancel" element={<Cancel />} />
                                <Route path="/success" element={<Success />} />
                                <Route path="/terms_policy" element={<Termsservices />} />
                                <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Phone />
                        <CustomFooter />
                </BrowserRouter>
        );
};

export default App;
