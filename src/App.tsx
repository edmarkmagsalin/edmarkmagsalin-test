import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/css/App.css'

// layout
import Navbar from './layouts/Navbar'
import Cover from './layouts/Cover'
import Footer from './layouts/Footer'

// main
import Home from './pages/Home'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Router>
      <header>
      <Navbar />
      <Routes>
        <Route path='/' element={<Cover />} />
      </Routes>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
