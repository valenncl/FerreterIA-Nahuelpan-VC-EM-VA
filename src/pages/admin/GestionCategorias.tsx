import { Link, useNavigate } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

const LogoNahuelpan = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4" />
    <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
  </svg>
);

interface GestionCategoriasProps {
  onLogout: () => void;
}

export function GestionCategorias({ onLogout }: GestionCategoriasProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin');
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
        <AdminSidebar active="categorias" onLogout={onLogout} />
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

        <main aria-label="Gestión de categorías y contenido visual" className="flex-1 p-4 sm:p-6">
          <section aria-labelledby="gestion-categorias-titulo" className="bg-[#f3f2ee] border border-black rounded-2xl p-4 sm:p-5 shadow-sm h-full max-w-[1500px] mx-auto">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
              <h2 id="gestion-categorias-titulo" className="text-2xl sm:text-3xl font-black text-black m-0 border-l-4 border-[#F9B805] pl-3">
                Gestión de Categorías
              </h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <button type="button" className="bg-[#F9B805] text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-xl border border-black hover:brightness-95 transition-colors">
                  + Nueva Categoría
                </button>
                <Link to="/admin/productos" className="bg-white text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-xl border border-black hover:bg-zinc-100 transition-colors">
                  + Agregar Productos
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_0.9fr] gap-5">
              <div className="overflow-x-auto border border-black bg-white rounded-2xl shadow-sm">
                <table className="w-full min-w-[520px] border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white text-xs font-bold">
                      <th scope="col" className="p-3 text-left">Nombre</th>
                      <th scope="col" className="p-3 text-left">Imagen</th>
                      <th scope="col" className="p-3 text-left">Estado</th>
                      <th scope="col" className="p-3 text-left">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm text-zinc-800">
                    <tr>
                      <td className="p-3">Herramientas</td>
                      <td className="p-3">img</td>
                      <td className="p-3"><span className="inline-block text-green-600 font-bold">Activa</span></td>
                      <td className="p-3">
                        <div className="flex gap-2 flex-wrap">
                          <button type="button" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-2 py-1 rounded-sm">Eliminar</button>
                          <Link to="/admin/productos" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Productos</Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Pinturas</td>
                      <td className="p-3">img</td>
                      <td className="p-3"><span className="inline-block text-green-600 font-bold">Activa</span></td>
                      <td className="p-3">
                        <div className="flex gap-2 flex-wrap">
                          <button type="button" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-2 py-1 rounded-sm">Eliminar</button>
                          <Link to="/admin/productos" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Productos</Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Plomería</td>
                      <td className="p-3">img</td>
                      <td className="p-3"><span className="inline-block text-red-600 font-bold">Inactiva</span></td>
                      <td className="p-3">
                        <div className="flex gap-2 flex-wrap">
                          <button type="button" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-2 py-1 rounded-sm">Eliminar</button>
                          <Link to="/admin/productos" className="text-xs font-bold text-black border border-black px-2 py-1 rounded-sm">Productos</Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <aside aria-labelledby="editar-categoria-titulo" className="bg-white border border-black rounded-2xl p-4 shadow-sm">
                <h3 id="editar-categoria-titulo" className="text-lg font-black text-black mb-4 border-b-2 border-[#F9B805] pb-2">
                  Editar categoría
                </h3>
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                  <div>
                    <label htmlFor="categoria-nombre" className="block text-xs font-bold text-black mb-1">
                      Nombre de la categoría
                    </label>
                    <input
                      id="categoria-nombre"
                      name="nombreCategoria"
                      type="text"
                      placeholder="Ingresar nombre de la categoría"
                      className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-black"
                    />
                  </div>
                  <fieldset className="border border-dashed border-gray-400 p-3 rounded-xl">
                    <legend className="px-1 text-xs font-bold text-black">Imagen de la categoría</legend>
                    <input type="file" accept="image/*" className="text-xs text-gray-600" />
                  </fieldset>
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
                    <button type="button" className="border border-black text-black px-4 py-2 text-xs font-bold rounded-xl">
                      Cancelar
                    </button>
                    <button type="submit" className="bg-black text-white px-4 py-2 text-xs font-bold rounded-xl hover:text-yellow-400 transition-colors">
                      Guardar cambios
                    </button>
                  </div>
                </form>
              </aside>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}