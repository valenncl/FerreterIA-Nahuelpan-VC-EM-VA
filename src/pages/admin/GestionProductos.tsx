import { Link, useNavigate } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

const LogoNahuelpan = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4" />
    <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
  </svg>
);

interface GestionProductosProps {
  onLogout: () => void;
}

export function GestionProductos({ onLogout }: GestionProductosProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] font-sans text-zinc-900">
      <header className="bg-black text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-3 border-b-2 border-red-700 shadow-md">
        <div className="flex items-center space-x-3 min-w-0">
          <LogoNahuelpan className="w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="text-xs sm:text-base font-bold tracking-wide truncate">
            Panel Admin – Bulonería y Ferretería Nahuelpan
          </h2>
        </div>
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium hover:text-amber-400 cursor-pointer transition-colors shrink-0">
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">Administrador</span>
          <span className="text-xs">⌄</span>
        </div>
      </header>

      <div className="flex flex-1">
        <AdminSidebar active="productos" onLogout={onLogout} />
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
            <Link to="/admin/productos" className="flex items-center space-x-3 px-6 py-3 text-sm font-bold border-b border-amber-500/30 hover:bg-zinc-900 text-gray-200 transition-colors">
              <span>🛒</span><span>Productos</span>
            </Link>
            <button type="button" onClick={handleLogout} className="flex items-center space-x-3 px-6 py-3 text-sm font-bold hover:bg-zinc-900 text-gray-200 transition-colors mt-2">
              <span>🚪</span><span>Cerrar sesión</span>
            </button>
          </nav>
        </div>

        <main aria-label="Gestión de productos" className="flex-1 p-4 sm:p-6">
          <section className="bg-[#f3f2ee] border border-black rounded-sm p-4 sm:p-5 shadow-sm h-full max-w-[1500px] mx-auto">
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-black text-black m-0 border-l-4 border-[#F9B805] pl-3">
                Gestión de Productos
              </h2>
            </div>

            <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-y border-black/15 py-3">
              <p className="text-xs text-zinc-600 m-0">3 productos registrados en el catálogo</p>
              <label htmlFor="filtro-categoria" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-black">
                <span>Filtrar por categoría</span>
                <select id="filtro-categoria" className="border border-black bg-white px-3 py-2 text-sm text-zinc-800 rounded-xl w-full sm:w-[220px] normal-case tracking-normal" defaultValue="Todas">
                  <option>Todas</option>
                  <option>Herramientas</option>
                  <option>Pinturas</option>
                  <option>Plomería</option>
                  <option>Adhesivos</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-5 items-start">
              <div className="hidden xl:block border border-black bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr className="bg-zinc-900 text-white text-xs font-bold">
                      <th scope="col" className="p-3 text-left w-[25%]">Producto</th>
                      <th scope="col" className="p-3 text-left w-[18%]">Categoría</th>
                      <th scope="col" className="p-3 text-left w-[14%]">Estado</th>
                      <th scope="col" className="p-3 text-right w-[28%]">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm text-zinc-800">
                    <tr>
                      <td className="p-3"><strong className="block text-black">Taladro Percutor</strong><span className="text-xs text-zinc-500">Taladro profesional para madera y metal</span></td>
                      <td className="p-3">Herramientas</td>
                      <td className="p-3"><span className="inline-flex items-center gap-1.5 text-green-600 font-bold"><span className="w-2 h-2 rounded-full bg-green-600" />Activo</span></td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button type="button" className="text-xs font-bold text-black border border-black px-3 py-1.5 rounded-xl hover:bg-zinc-100">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-3 py-1.5 rounded-xl hover:bg-red-50">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3"><strong className="block text-black">Pintura Interior</strong><span className="text-xs text-zinc-500">Pintura lavable para interiores de alta cobertura</span></td>
                      <td className="p-3">Pinturas</td>
                      <td className="p-3"><span className="inline-flex items-center gap-1.5 text-green-600 font-bold"><span className="w-2 h-2 rounded-full bg-green-600" />Activo</span></td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button type="button" className="text-xs font-bold text-black border border-black px-3 py-1.5 rounded-xl hover:bg-zinc-100">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-3 py-1.5 rounded-xl hover:bg-red-50">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3"><strong className="block text-black">Llave inglesa</strong><span className="text-xs text-zinc-500">Llave de acero forjado para trabajo pesado</span></td>
                      <td className="p-3">Herramientas</td>
                      <td className="p-3"><span className="inline-flex items-center gap-1.5 text-red-600 font-bold"><span className="w-2 h-2 rounded-full bg-red-600" />Inactivo</span></td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button type="button" className="text-xs font-bold text-black border border-black px-3 py-1.5 rounded-xl hover:bg-zinc-100">Editar</button>
                          <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-3 py-1.5 rounded-xl hover:bg-red-50">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="xl:hidden space-y-3">
                {[
                  ['Taladro Percutor', 'Herramientas', 'Taladro profesional para madera y metal', 'Activo'],
                  ['Pintura Interior', 'Pinturas', 'Pintura lavable para interiores de alta cobertura', 'Activo'],
                  ['Llave inglesa', 'Herramientas', 'Llave de acero forjado para trabajo pesado', 'Inactivo'],
                ].map(([nombre, categoria, descripcion, estado]) => (
                  <article key={nombre} className="bg-white border border-black rounded-2xl p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-black text-black truncate">{nombre}</h3>
                        <p className="text-xs text-zinc-500 mt-1">{descripcion}</p>
                      </div>
                      <span className={estado === 'Activo' ? 'shrink-0 text-xs font-bold text-green-600' : 'shrink-0 text-xs font-bold text-red-600'}>{estado}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-200 pt-3">
                      <span className="text-xs font-bold text-zinc-600">{categoria}</span>
                      <div className="flex gap-2">
                        <button type="button" className="text-xs font-bold text-black border border-black px-3 py-1.5 rounded-xl">Editar</button>
                        <button type="button" className="text-xs font-bold text-red-700 border border-red-700 px-3 py-1.5 rounded-xl">Eliminar</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside aria-labelledby="editar-producto-titulo" className="bg-white border border-black rounded-2xl p-4 sm:p-5 shadow-sm">
                <h3 id="editar-producto-titulo" className="text-lg font-black text-black mb-4 border-b-2 border-[#F9B805] pb-2">
                  Nuevo producto
                </h3>
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                  <div>
                    <label htmlFor="producto-nombre" className="block text-xs font-bold text-black mb-1">Nombre del producto</label>
                    <input id="producto-nombre" name="nombreProducto" type="text" placeholder="Ingresar nombre del producto" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label htmlFor="producto-categoria" className="block text-xs font-bold text-black mb-1">Categoría asociada</label>
                    <select id="producto-categoria" name="categoriaProducto" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-black" defaultValue="Herramientas">
                      <option>Herramientas</option>
                      <option>Pinturas</option>
                      <option>Plomería</option>
                      <option>Adhesivos</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="producto-descripcion" className="block text-xs font-bold text-black mb-1">Descripción</label>
                    <textarea id="producto-descripcion" name="descripcionProducto" placeholder="Ingresar descripción del producto" rows={4} className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl resize-none focus:outline-none focus:border-black" />
                  </div>
                  <fieldset className="border border-dashed border-gray-400 p-3 rounded-xl">
                    <legend className="px-1 text-xs font-bold text-black">Imagen principal</legend>
                    <input type="file" accept="image/*" className="text-xs text-gray-600" />
                  </fieldset>
                  <fieldset className="border border-dashed border-gray-400 p-3 rounded-xl">
                    <legend className="px-1 text-xs font-bold text-black">Galería</legend>
                    <input type="file" accept="image/*" multiple className="text-xs text-gray-600" />
                  </fieldset>
                  <div>
                    <label htmlFor="producto-estado" className="block text-xs font-bold text-black mb-1">Estado</label>
                    <select id="producto-estado" name="estadoProducto" className="w-full border border-gray-400 bg-white text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-black" defaultValue="Activo">
                      <option>Activo</option>
                      <option>Inactivo</option>
                    </select>
                  </div>
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
                    <button type="button" className="border border-black text-black px-4 py-2 text-xs font-bold rounded-xl">Cancelar</button>
                    <button type="submit" className="bg-[#F9B805] text-black px-4 py-2 text-xs font-bold rounded-xl hover:brightness-95 transition-colors">Guardar producto</button>
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