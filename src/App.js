import { Blogs } from './components/blogs';
import { Contact } from './components/contact';
import { Layout } from './layout/layout';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Define nested routes here */}
            {/* <Route path="Blogs" element={<Blogs />} /> */}
            {/* ... etc. */}
          </Route>
          
          <Route path="Blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

