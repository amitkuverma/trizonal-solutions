import './App.scss';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { PayerServices } from './components/payer-services';
import { HospitalsProviders } from './components/hospitals-providers';
import { OurClients } from './components/our-clients';
import { Blogs } from './components/blogs';
import { Contact } from './components/contact';
import { NoPage } from './components/no-page';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact index path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="hospitals-providers" element={<HospitalsProviders />} />
          <Route exact path="payer-services" element={<PayerServices />} />
          <Route exact path="blogs" element={<PayerServices />} />
          <Route exact path="out-clients" element={<OurClients />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route exact path="contact" element={<Contact />} />
          <Route path="**" element={<Home />} />
          <Redirect to="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

