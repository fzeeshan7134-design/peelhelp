import WhatWeDo from './components/WhatWeDo'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './pages/Team'
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
      </Routes>

      <Footer />
    </>
  )
}

export default App