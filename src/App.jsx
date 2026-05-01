import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import HearingAids from './pages/HearingAids'
import Brands from './pages/Brands'
import Types from './pages/Types'
import Prices from './pages/Prices'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hearing-aids" element={<HearingAids />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/types" element={<Types />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App