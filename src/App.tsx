import { DetalleCategoria } from './pages/public/DetalleCategoria';
import { AccesoAdministrativo } from './pages/admin/AccesoAdmin'
import { DashboardPrincipal } from './pages/admin/AdminPrincipal'
import { DisponibilidadHorarios } from './pages/admin/DisponibilidadHorarios'
import { GestionCategorias } from './pages/admin/GestionCategorias'
import { Inicio } from './pages/public/Inicio';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <DetalleCategoria />
      <AccesoAdministrativo />
      <DashboardPrincipal />
      <DisponibilidadHorarios />
      <GestionCategorias />
      <Inicio />
    </main>
  );
}

export default App;
