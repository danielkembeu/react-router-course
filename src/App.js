import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccueilPage from './pages/accueil'
import ProfilPage from './pages/profil'
import LandingPage from './pages/landing/landing'


export default function App() {
  return (
    <Routes>
      <Route path='/accueil' element={<AccueilPage />} />
      <Route path='/profil' element={<ProfilPage />} />
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}
