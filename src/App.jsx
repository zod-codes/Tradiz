import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer';
import Ourteam from './pages/Ourteam';
import Blogs from './components/Blogs';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/OurTeam" element={<Ourteam />}/>
          <Route path="/Blogs" element={<Blogs />}/>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
