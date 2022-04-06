import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Home from './pages/Home';
import About from './pages/About'
import DesignSys from './components/DesignSystem'
import Page404 from './components/404'
import Header from './components/Header'
import Housing from './components/Housing'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/housing/:housingId" element={<Housing />}/>
        <Route path="/about" element={<About />} />
        <Route path='*' element={<Page404 />}/>
        <Route path="/designsys" element={<DesignSys />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
