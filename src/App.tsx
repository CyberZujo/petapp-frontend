import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './auth/Login'
import Navbar from './nav/Navbar'
import PetList, { type Pet } from './pets/PetList'
import { AuthContext, AuthProvider } from './auth/context/AuthContext'
import './App.css'

import bellaUrl from './assets/bella.jpg';
import rexUrl from './assets/rex.jpg';
import pexelsUrl from './assets/pexels.jpg';

const PrivateLayout: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  const pets: Pet[] = [
    {id: 1, name: 'Bella', breed: 'Labrador', imgUrl:bellaUrl, description: 'Friendly'},
    {id: 1, name: 'Canine', breed: 'Labrador', imgUrl:pexelsUrl, description: 'Friendly'},
    {id: 1, name: 'Rex', breed: 'Labrador', imgUrl:rexUrl, description: 'Friendly'}

  ]
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<PrivateLayout />}>
            <Route path="/pets" element={<PetList pets={pets}/>}/>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App