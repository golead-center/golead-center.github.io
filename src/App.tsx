import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/About-Us';
import People from './pages/People';
import Programs from './pages/Programs';
import GetInvolved from './pages/Get-Involved';
import ContactUs from './pages/Contact-Us';
import Presentations from './pages/Presentations';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/programs" element={<Programs/>} />
          <Route path="/get-involved" element={<GetInvolved/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/presentations" element={<Presentations/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
