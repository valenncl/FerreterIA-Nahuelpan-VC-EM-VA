import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoriaItem {
  id: string;
  nombre: string;
  disponible: boolean;
  imagenUrl: string;
}

export const Categorias = () => {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('todas');

  const categorias: CategoriaItem[] = [
    {
      id: '1',
      nombre: 'Herramientas',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '2',
      nombre: 'Pinturería',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '3',
      nombre: 'Sanitarios',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '4',
      nombre: 'Electricidad',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '5',
      nombre: 'Ferretería',
      disponible: false,
      imagenUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '6',
      nombre: 'Gas',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '7',
      nombre: 'Bulonería',
      disponible: false,
      imagenUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '8',
      nombre: 'Adhesivos',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '9',
      nombre: 'Materiales',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '10',
      nombre: 'Jardinería',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const categoriasFiltradas = categorias.filter((categoria) => {
    const coincideBusqueda = categoria.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideFiltro =
      filtro === 'todas' ||
      (filtro === 'disponible' && categoria.disponible) ||
      (filtro === 'no-disponible' && !categoria.disponible);

    return coincideBusqueda && coincideFiltro;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 text-nahuelpan-black font-sans">
      {/* Encabezado y Buscador */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nahuelpan-black">
            Categorías de Productos
          </h1>
          <p className="text-xs sm:text-sm text-nahuelpan-gray mt-1">
            Explora nuestras categorías y consulta disponibilidad
          </p>
        </div>

        {/* Buscador Estilo Cápsula */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Buscar categoría..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs border border-gray-600 rounded-full focus:outline-none focus:border-nahuelpan-black"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            🔍
          </span>
        </div>
      </div>

      {/* Botones de Filtro */}
      <div className="flex flex-wrap items-center gap-2 mb-8 text-xs sm:text-sm font-semibold">
        <span className="text-nahuelpan-black font-bold mr-1">Filtrar por:</span>
        <button
          type="button"
          onClick={() => setFiltro('todas')}
          className={`${filtro === 'todas' ? 'bg-nahuelpan-gold text-nahuelpan-black' : 'bg-nahuelpan-red text-white'} px-4 py-1 rounded-full font-bold shadow-sm`}
        >
          Todas
        </button>
        <button
          type="button"
          onClick={() => setFiltro('disponible')}
          className={`${filtro === 'disponible' ? 'bg-nahuelpan-gold text-nahuelpan-black' : 'bg-nahuelpan-red text-white'} px-4 py-1 rounded-full font-bold shadow-sm`}
        >
          Disponible
        </button>
        <button
          type="button"
          onClick={() => setFiltro('no-disponible')}
          className={`${filtro === 'no-disponible' ? 'bg-nahuelpan-gold text-nahuelpan-black' : 'bg-nahuelpan-red text-white'} px-4 py-1 rounded-full font-bold shadow-sm`}
        >
          No disponible
        </button>
      </div>

      {/* Grilla de Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriasFiltradas.length > 0 ? (
          categoriasFiltradas.map((cat) => (
            <Link
              to={`/categorias/${cat.id}/productos`}
              key={cat.id}
              className="border-2 border-gray-400 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-36 overflow-hidden">
                <img
                  src={cat.imagenUrl}
                  alt={cat.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-white flex flex-col gap-2 items-start">
                <span className="font-bold text-nahuelpan-black text-sm block">
                  {cat.nombre}
                </span>
                {cat.disponible ? (
                  <span className="border border-green-500 text-green-500 text-[11px] px-2 py-0.5 rounded-sm font-medium">
                    Disponible
                  </span>
                ) : (
                  <span className="border border-red-600 text-red-600 text-[11px] px-2 py-0.5 rounded-sm font-medium">
                    No disponible
                  </span>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-nahuelpan-gray">
            No se encontraron categorías con ese criterio.
          </p>
        )}
      </div>

    </div>
  );
};
