import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
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

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate fetching data (replace with your actual data fetching logic)
    const fetchData = async () => {
      // Simulate a delay (replace with actual data fetching logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Home />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Nav />
                  <Services />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/cleaningchecklist"
              element={
                <>
                  <Nav />
                  <CleaningChecklist />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Nav />
                  <Contact />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/book"
              element={
                <>
                  <Nav />
                  <Book />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/faq"
              element={
                <>
                  <Nav />
                  <FAQ />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/Cancel"
              element={
                <>
                  <Nav />
                  <Cancel />
                  <CustomFooter />
                </>
              }
            />
            <Route
              path="/Success"
              element={
                <>
                  <Nav />
                  <Success />
                  <CustomFooter />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
  
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
