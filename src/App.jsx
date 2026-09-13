import WhatWeDo from './components/WhatWeDo'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './pages/Team'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhatWeDo />
            </>
          }
        />

        <Route path="/team" element={<Team />} />

        <Route path="/events" element={<Events />} />

        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App