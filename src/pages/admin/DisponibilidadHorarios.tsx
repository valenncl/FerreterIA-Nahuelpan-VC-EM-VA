import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

const LogoNahuelpan = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4" />
    <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
  </svg>
);

interface DisponibilidadHorariosProps {
  onLogout: () => void;
}

export function DisponibilidadHorarios({ onLogout }: DisponibilidadHorariosProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin');
  };

  const [categoriasActivas, setCategoriasActivas] = useState<Record<string, boolean>>({
    Herramientas: true,
    Pinturas: true,
    Plomería: false,
  });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const alternarCategoria = (categoria: string) => {
    setCategoriasActivas((estadoActual) => ({
      ...estadoActual,
      [categoria]: !estadoActual[categoria],
    }));
    setMensaje(`Estado de ${categoria} actualizado.`);
    setError('');
  };

  const guardarHorarios = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const datos = new FormData(event.currentTarget);
    const aperturas = datos.getAll('apertura').map(String);
    const cierres = datos.getAll('cierre').map(String);
    if (aperturas.some((hora, indice) => hora >= cierres[indice])) {
      setError('La hora de apertura debe ser anterior a la hora de cierre.');
      setMensaje('');
      return;
    }
    setError('');
    setMensaje('Horarios guardados correctamente.');
  };

  const guardarCierre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const datos = new FormData(event.currentTarget);
    const motivo = String(datos.get('motivoCierre') || '').trim();
    const inicio = String(datos.get('fechaInicio') || '');
    const reapertura = String(datos.get('fechaReapertura') || '');
    if (!motivo || !inicio || !reapertura) {
      setError('Completá motivo, fecha de inicio y fecha de reapertura.');
      setMensaje('');
      return;
    }
    if (inicio > reapertura) {
      setError('La fecha de inicio no puede ser posterior a la reapertura.');
      setMensaje('');
      return;
    }
    setError('');
    setMensaje('Cierre temporal programado correctamente.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] font-sans text-zinc-900">
      <header className="bg-black text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b-2 border-red-700 shadow-md">
        <div className="flex items-center space-x-3">
          <LogoNahuelpan className="w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="text-sm sm:text-base font-bold tracking-wide">
            Panel Admin – Bulonería y Ferretería Nahuelpan
          </h2>
        </div>
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium hover:text-amber-400 cursor-pointer transition-colors">
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span>Administrador</span>
          <span className="text-xs">▼</span>
        </div>
      </header>

      <div className="flex flex-1">
        <AdminSidebar active="disponibilidad" onLogout={onLogout} />
        <div className="hidden">
          <nav className="flex flex-col py-4">
            <Link to="/admin/dashboard" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-white transition-colors">
              <span>🏠</span><span>Inicio</span>
            </Link>
            <Link to="/admin/categorias" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-gray-200 transition-colors">
              <span>📦</span><span>Categorías</span>
            </Link>
            <Link to="/admin/disponibilidad" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-gray-200 transition-colors">
              <span>📋</span><span>Disponibilidad</span>
            </Link>
            <Link to="/admin/disponibilidad" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-gray-200 transition-colors">
              <span>⏰</span><span>Horarios</span>
            </Link>
            <Link to="/admin/categorias" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-gray-200 transition-colors">
              <span>🖼️</span><span>Contenido Visual</span>
            </Link>
            <button type="button" onClick={handleLogout} className="flex items-center space-x-3 px-6 py-3 text-sm font-bold hover:bg-zinc-900 text-gray-200 transition-colors mt-2">
              <span>🚪</span><span>Cerrar sesión</span>
            </button>
          </nav>
        </div>

        <main aria-label="Disponibilidad y gestión de horarios" className="flex-1 p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6 border-l-4 border-[#F9B805] pl-3">
            Disponibilidad y Gestión de Horarios
          </h2>
          {(error || mensaje) && <p role="status" className={`mb-4 text-sm font-bold ${error ? 'text-red-600' : 'text-green-700'}`}>{error || mensaje}</p>}

          <div className="grid grid-cols-1 xl:grid-cols-[1.55fr_1fr] gap-4 items-start">
            <div className="space-y-4">
              <section aria-labelledby="disponibilidad-categoria-titulo" className="bg-white border border-black rounded-2xl p-4 shadow-sm">
                <h3 id="disponibilidad-categoria-titulo" className="text-xl font-extrabold text-black mb-4 border-b-2 border-[#F9B805] pb-2">
                  Disponibilidad por Categoría
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-white text-xs font-bold">
                        <th scope="col" className="p-2">Categoría</th>
                        <th scope="col" className="p-2">Estado actual</th>
                        <th scope="col" className="p-2">Activar/Desactivar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-800">
                      {Object.entries(categoriasActivas).map(([categoria, activa]) => (
                        <tr key={categoria}>
                          <td className="p-2">{categoria}</td>
                          <td className={`p-2 font-semibold ${activa ? 'text-green-700' : 'text-red-600'}`}>
                            {activa ? 'Disponible' : 'No disponible'}
                          </td>
                          <td className="p-2">
                            <button type="button" role="switch" aria-checked={activa} onClick={() => alternarCategoria(categoria)} className="inline-flex items-center gap-2">
                              <span className={`relative inline-flex h-6 w-11 items-center rounded-full border border-black transition-colors ${activa ? 'bg-[#F9B805]' : 'bg-zinc-300'}`}>
                                <span className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${activa ? 'translate-x-5' : 'translate-x-1'}`} />
                              </span>
                              <span className="text-xs font-bold">{activa ? 'Activo' : 'Inactivo'}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section aria-labelledby="cierre-temporal-titulo" className="bg-white border border-black rounded-2xl p-4 shadow-sm w-full">
                <h3 id="cierre-temporal-titulo" className="text-xl font-extrabold text-black mb-4 border-b-2 border-[#F9B805] pb-2">
                  Cierre Temporal
                </h3>
                <form className="space-y-4" onSubmit={guardarCierre}>
                  <label className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                    <input type="checkbox" name="reporte-cierre" className="accent-black" />
                    Reportar cierre temporal del negocio
                  </label>
                  <div>
                    <label htmlFor="motivo-cierre" className="block text-xs font-bold text-black mb-1">Motivo del cierre</label>
                    <input id="motivo-cierre" name="motivoCierre" type="text" placeholder="Ingresar motivo del cierre" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-black" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fecha-inicio-cierre" className="block text-xs font-bold text-black mb-1">Fecha de inicio</label>
                      <input id="fecha-inicio-cierre" name="fechaInicio" type="date" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="fecha-reapertura" className="block text-xs font-bold text-black mb-1">Fecha de reapertura</label>
                      <input id="fecha-reapertura" name="fechaReapertura" type="date" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-black text-white text-sm font-bold py-2 rounded-xl border border-black hover:text-yellow-400 transition-colors">
                    Confirmar cierre temporal
                  </button>
                </form>
              </section>
            </div>

            <section aria-labelledby="horario-atencion-titulo" className="bg-white border border-black rounded-2xl p-4 shadow-sm">
              <h3 id="horario-atencion-titulo" className="text-xl font-extrabold text-black mb-4 border-b-2 border-[#F9B805] pb-2">
                Horario de Atención
              </h3>
              <form className="space-y-4" onSubmit={guardarHorarios}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-zinc-900 text-white text-[11px] uppercase tracking-wide">
                        <th className="p-2">Día</th>
                        <th className="p-2">Apertura</th>
                        <th className="p-2">Cierre</th>
                        <th className="p-2">Cerrado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-800">
                      {[
                        ['Lunes', '08:00', '18:00'],
                        ['Martes', '08:00', '18:00'],
                        ['Miércoles', '08:00', '18:00'],
                        ['Jueves', '08:00', '18:00'],
                        ['Viernes', '08:00', '18:00'],
                        ['Sábado', '09:00', '14:00'],
                        ['Domingo', '09:00', '14:00'],
                      ].map(([dia, apertura, cierre]) => (
                        <tr key={dia}>
                          <th scope="row" className="p-2 font-bold text-left">{dia}</th>
                          <td className="p-2"><input name="apertura" type="time" defaultValue={apertura} className="w-full border border-gray-400 rounded-xl px-2 py-1 bg-white" /></td>
                          <td className="p-2"><input name="cierre" type="time" defaultValue={cierre} className="w-full border border-gray-400 rounded-xl px-2 py-1 bg-white" /></td>
                          <td className="p-2"><input type="checkbox" className="accent-gray-600" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button type="submit" className="w-full bg-black text-white text-sm font-bold py-2 rounded-xl border border-black hover:text-yellow-400 transition-colors">
                  Guardar horarios
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}