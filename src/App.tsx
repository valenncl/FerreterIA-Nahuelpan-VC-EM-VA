import { Inicio } from './pages/public/Inicio'
import { AccesoAdministrativo } from './pages/admin/AccesoAdmin'
import { DashboardPrincipal } from './pages/admin/AdminPrincipal'
import { DisponibilidadHorarios } from './pages/admin/DisponibilidadHorarios'
import { GestionCategorias } from './pages/admin/GestionCategorias'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Inicio />
      <AccesoAdministrativo />
      <DashboardPrincipal />
      <DisponibilidadHorarios />
      <GestionCategorias />
    </main>
  )
}

export default App
