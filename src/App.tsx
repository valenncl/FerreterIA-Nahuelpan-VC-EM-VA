import { useState, type ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LayoutPublico } from './components/LayoutPublico'
import { Inicio } from './pages/public/Inicio'
import { Nosotros } from './pages/public/Nosotros'
import { Categorias } from './pages/public/Categorias'
import { DetalleCategoria } from './pages/public/DetalleCategoria'
import { Productos } from './pages/public/Productos'
import { AccesoAdmin } from './pages/admin/AccesoAdmin'
import { AdminPrincipal } from './pages/admin/AdminPrincipal'
import { DisponibilidadHorarios } from './pages/admin/DisponibilidadHorarios'
import { GestionCategorias } from './pages/admin/GestionCategorias'
import { GestionProductos } from './pages/admin/GestionProductos'

interface RutaProtegidaProps {
  estaAutenticado: boolean
  children: ReactNode
}

function RutaProtegida({ estaAutenticado, children }: RutaProtegidaProps) {
  return estaAutenticado ? children : <Navigate to="/admin" replace />
}

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPublico><Inicio /></LayoutPublico>} />
        <Route path="/nosotros" element={<LayoutPublico><Nosotros /></LayoutPublico>} />
        <Route path="/categorias" element={<LayoutPublico><Categorias /></LayoutPublico>} />
        <Route path="/categorias/:id" element={<LayoutPublico><DetalleCategoria /></LayoutPublico>} />
        <Route path="/categorias/:id/productos" element={<LayoutPublico><Productos /></LayoutPublico>} />
        <Route path="/categorias/:id/productos/:productoId" element={<LayoutPublico><DetalleCategoria /></LayoutPublico>} />
        <Route
          path="/admin"
          element={<AccesoAdmin onLogin={() => setEstaAutenticado(true)} />}
        />
        <Route
          path="/admin/dashboard"
          element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <AdminPrincipal onLogout={() => setEstaAutenticado(false)} />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin/categorias"
          element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <GestionCategorias onLogout={() => setEstaAutenticado(false)} />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin/disponibilidad"
          element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <DisponibilidadHorarios onLogout={() => setEstaAutenticado(false)} />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin/productos"
          element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <GestionProductos onLogout={() => setEstaAutenticado(false)} />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App