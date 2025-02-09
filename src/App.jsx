import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import AuthForm from './components/AuthForm'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import Comments from './pages/Comments'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
