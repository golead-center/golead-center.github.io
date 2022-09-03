import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/About-Us';
import Programs from './pages/Programs';
import GetInvolved from './pages/Get-Involved';
import ContactUs from './pages/Contact-Us';
import Presentations from './pages/Presentations';
import Testimonials from './pages/Testimonials';

import Facilitators from './pages/people/People-Facilitators';
import ExecutiveTeam from './pages/people/People-Executive-Team';
import PastFacilitators from './pages/people/People-Past-Facilitators';
import PastExecutive from './pages/people/People-Past-Executive';
import PastWinners from './pages/people/People-Past-Winners';


function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/people/facilitators" element={<Facilitators/>} />
          <Route path="/people/executive-team" element={<ExecutiveTeam/>} />
          <Route path="/people/past-facilitators" element={<PastFacilitators/>} />
          <Route path="/people/past-executive" element={<PastExecutive/>} />
          <Route path="/people/past-winners" element={<PastWinners/>} />
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
