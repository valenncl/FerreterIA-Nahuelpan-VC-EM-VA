import { AdminSidebar } from './AdminSidebar';

const LogoNahuelpan = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4"/>
    <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
  </svg>
);

export function AdminPrincipal() {
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
        <AdminSidebar active="inicio" />

        <main aria-label="Dashboard principal" className="flex-1 p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-x-auto max-w-[1600px]">
          <section aria-labelledby="resumen-titulo">
            <h2 id="resumen-titulo" className="text-xl sm:text-2xl font-black text-black mb-4 sm:mb-6 border-l-4 border-[#F9B805] pl-3">
              Dashboard Principal
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <article aria-label="Total de categorías" className="bg-white border-t-4 border-[#F9B805] border-x border-b border-black p-4 rounded-2xl flex flex-col justify-between min-h-32 shadow-sm hover:-translate-y-0.5 transition-transform">
                <div>
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">12</p>
                  <h3 className="text-xs font-semibold text-gray-500 mt-1">Total Categorías</h3>
                </div>
              </article>

              <article aria-label="Categorías disponibles" className="bg-white border-t-4 border-[#F9B805] border-x border-b border-black p-4 rounded-2xl flex flex-col justify-between min-h-32 shadow-sm hover:-translate-y-0.5 transition-transform">
                <div>
                  <span className="inline-flex items-center justify-center bg-green-500 text-white w-5 h-5 rounded-sm text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">9</p>
                  <h3 className="text-xs font-semibold text-gray-500 mt-1">Disponibles</h3>
                </div>
              </article>

              <article aria-label="Categorías no disponibles" className="bg-white border-t-4 border-[#F9B805] border-x border-b border-black p-4 rounded-2xl flex flex-col justify-between min-h-32 shadow-sm hover:-translate-y-0.5 transition-transform">
                <div>
                  <span className="text-red-600 font-black text-lg">✕</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">3</p>
                  <h3 className="text-xs font-semibold text-gray-500 mt-1">No disponibles</h3>
                </div>
              </article>

              <article aria-label="Última edición" className="bg-white border-t-4 border-[#F9B805] border-x border-b border-black p-4 rounded-2xl flex flex-col justify-between min-h-32 shadow-sm hover:-translate-y-0.5 transition-transform">
                <div>
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-black leading-none">Hoy</p>
                  <h3 className="text-xs font-semibold text-gray-500 mt-1">Última edición</h3>
                </div>
              </article>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <section aria-labelledby="actividad-titulo" className="lg:col-span-2">
              <h2 id="actividad-titulo" className="text-lg font-extrabold text-black border-b-2 border-[#F9B805] pb-2 mb-4">
                Actividad Reciente
              </h2>

              <div className="border border-black bg-white rounded-2xl overflow-x-auto shadow-sm">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white text-xs font-bold">
                      <th scope="col" className="p-3">Descripción</th>
                      <th scope="col" className="p-3">Fecha</th>
                      <th scope="col" className="p-3 text-right">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm font-medium text-zinc-800">
                    <tr>
                      <td className="p-3">Categoría Pinturas editada</td>
                      <td className="p-3 text-gray-500">Hoy, 10:32 am</td>
                      <td className="p-3 text-right">
                        <span className="inline-flex items-center justify-center bg-green-500 text-white w-4 h-4 rounded-sm text-xs font-bold">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Estado Plomería: No disp.</td>
                      <td className="p-3 text-gray-500">Ayer, 4:15 pm</td>
                      <td className="p-3 text-right">
                        <span className="text-amber-600 font-bold text-sm">⚠️</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Horario sábado actualizado</td>
                      <td className="p-3 text-gray-500">Ayer, 11:00 am</td>
                      <td className="p-3 text-right">
                        <span className="inline-flex items-center justify-center bg-green-500 text-white w-4 h-4 rounded-sm text-xs font-bold">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Nueva categoría: Adhesivos</td>
                      <td className="p-3 text-gray-500">Lun 5 ago</td>
                      <td className="p-3 text-right">
                        <span className="inline-flex items-center justify-center bg-green-500 text-white w-4 h-4 rounded-sm text-xs font-bold">✓</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <aside aria-labelledby="acciones-rapidas-titulo" className="lg:col-span-1">
              <h2 id="acciones-rapidas-titulo" className="text-lg font-extrabold text-black border-b-2 border-[#F9B805] pb-2 mb-4">
                Acciones Rápidas
              </h2>

              <ul className="space-y-2.5">
                <li>
                  <button type="button" className="w-full text-left bg-[#F9B805] border border-black px-4 py-2.5 rounded-xl hover:brightness-95 font-semibold text-xs sm:text-sm text-black transition-colors flex items-center justify-start gap-2 shadow-sm">
                    <span>+</span>
                    <span>Nueva categoría</span>
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full text-left bg-white border border-black px-4 py-2.5 rounded-xl hover:bg-zinc-100 font-semibold text-xs sm:text-sm text-black transition-colors flex items-center justify-start gap-2 shadow-sm">
                    <span>✏️</span>
                    <span>Editar disponibilidad</span>
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full text-left bg-white border border-black px-4 py-2.5 rounded-xl hover:bg-zinc-100 font-semibold text-xs sm:text-sm text-black transition-colors flex items-center justify-start gap-2 shadow-sm">
                    <span>⏰</span>
                    <span>Actualizar horario</span>
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full text-left bg-white border border-black px-4 py-2.5 rounded-xl hover:bg-zinc-100 font-semibold text-xs sm:text-sm text-black transition-colors flex items-center justify-start gap-2 shadow-sm">
                    <span>🖼️</span>
                    <span>Subir imagen/video</span>
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full text-left bg-white border border-black px-4 py-2.5 rounded-xl hover:bg-zinc-100 font-semibold text-xs sm:text-sm text-black transition-colors flex items-center justify-start gap-2 shadow-sm">
                    <span>🚪</span>
                    <span>Cerrar sesión</span>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}