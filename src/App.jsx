import { useContext } from "react";
import { Context } from "./main";
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import ContactUs from "./pages/ContactUs";
import ProductData from "./components/ProductData";
import NavBar from "./components/NavBar";

const  App = () => {

  const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)  
  return (
    <>      
      <BrowserRouter>
        {isAuthorized && <NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthorized ? <Home /> : <Navigate to="/login" />}/>
          <Route path="/product" element={isAuthorized ? <Product />: <Navigate to="/login" />}/>
          <Route path="/user" element={isAuthorized ? <User /> : <Navigate to="/login" />}/>
          <Route path="/contact" element={isAuthorized ? <ContactUs /> : <Navigate to="/login" />}/>
          <Route path="/product/:id" element={<ProductData />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;