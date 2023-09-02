import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { Services } from './components/services';
import { HospitalsProviders } from './components/hospitals-providers';
import { OurClients } from './components/our-clients';
import { Blogs } from './components/blogs';
import { Contact } from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hospitals-providers" element={<HospitalsProviders />} />
          <Route path="/service" element={<Services />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
