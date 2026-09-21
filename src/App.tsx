import { Inicio } from './pages/public/Inicio'
import { AccesoAdmin } from './pages/admin/AccesoAdmin'
import { AdminPrincipal } from './pages/admin/AdminPrincipal'
import { DisponibilidadHorarios } from './pages/admin/DisponibilidadHorarios'
import { GestionCategorias } from './pages/admin/GestionCategorias'
import { GestionProductos } from './pages/admin/GestionProductos'
import { DetalleCategoria } from './pages/public/DetalleCategoria'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Inicio />
      <DetalleCategoria />
      <AccesoAdmin />
      <AdminPrincipal />
      <DisponibilidadHorarios />
      <GestionCategorias />
      <GestionProductos />
    </main>
  );
}

export default App;
