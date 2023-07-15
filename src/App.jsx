import "./App.css";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ProductPage from "./components/AirConditioners/airConditionerProducts/productPage";
import ProductsToTheirCategory from "./components/AirConditioners/productsToTheirCategory";
import Loader from "./components/Loader";
// import SubHeadings from "./components/Body/SubHeadings";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Router>
              <Navbar />
              <div className="my-container">
                <Header />
                <Routes>
                  <Route path="/" element={<Body />} />
                  
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route
                    path="/:category"
                    element={<ProductsToTheirCategory />}
                  />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route
                    path="/products"
                    element={<ProductsToTheirCategory />}
                  />
                </Routes>
              </div>
              <Footer />
            </Router>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
