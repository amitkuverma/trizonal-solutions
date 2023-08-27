import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { PayerServices } from './components/payer-services';
import { HospitalsProviders } from './components/hospitals-providers';
import { OurClients } from './components/our-clients';
import { Blogs } from './components/blogs';
import { Contact } from './components/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hospitals-providers" element={<HospitalsProviders />} />
          <Route path="payer-services" element={<PayerServices />} />
          <Route path="blogs" element={<PayerServices />} />
          <Route path="out-clients" element={<OurClients />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

