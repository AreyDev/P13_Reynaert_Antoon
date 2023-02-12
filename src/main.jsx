import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Signin from './pages/Signin'
import User from './pages/User'
import './css/main.css'
import Nav from './composants/Nav'
import Footer from './composants/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
            <BrowserRouter>
            <Nav/>          
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/User" element={<User />} />
                <Route path="/Signin" element={<Signin />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
