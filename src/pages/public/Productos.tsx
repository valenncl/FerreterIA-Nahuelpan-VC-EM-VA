import { useState } from 'react';
import { ProductoCard } from '../../components/ProductoCard';

interface ProductoItem {
  id: string;
  nombre: string;
  precio: string;
  disponible: boolean;
  imagenUrl: string;
}

export const Productos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('todos');

  const productos: ProductoItem[] = [
    {
      id: '1',
      nombre: 'Bulón Hexagonal 1/2 x 2"',
      precio: '$1.200',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '2',
      nombre: 'Taladro Percutor 750W',
      precio: '$45.000',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '3',
      nombre: 'Pintura Látex Interior 10L',
      precio: '$28.500',
      disponible: false,
      imagenUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '4',
      nombre: 'Juego de Llaves Combinadas',
      precio: '$18.900',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '5',
      nombre: 'Cinta Aislante Negra 20m',
      precio: '$850',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '6',
      nombre: 'Adhesivo de Contacto 500g',
      precio: '$4.200',
      disponible: false,
      imagenUrl: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '7',
      nombre: 'Disco de Corte para Metal 4.5"',
      precio: '$1.500',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '8',
      nombre: 'Manguera de Riego 1/2" 15m',
      precio: '$12.400',
      disponible: true,
      imagenUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideFiltro =
      filtro === 'todos' ||
      (filtro === 'disponible' && producto.disponible) ||
      (filtro === 'no-disponible' && !producto.disponible);

    return coincideBusqueda && coincideFiltro;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 text-nahuelpan-black font-sans">
      {/* Encabezado y Buscador */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nahuelpan-black">
            Catálogo de Productos
          </h1>
          <p className="text-xs sm:text-sm text-nahuelpan-gray mt-1">
            Explora nuestros productos disponibles y consulta precios
          </p>
        </div>

        {/* Buscador Estilo Cápsula */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Buscar producto..."
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
          onClick={() => setFiltro('todos')}
          className={`${filtro === 'todos' ? 'bg-nahuelpan-gold text-nahuelpan-black' : 'bg-nahuelpan-red text-white'} px-4 py-1 rounded-full font-bold shadow-sm`}
        >
          Todos
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

      {/* Grilla de Productos usando el componente ProductoCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <ProductoCard
              key={prod.id}
              id={prod.id}
              nombre={prod.nombre}
              precio={prod.precio}
              disponible={prod.disponible}
              imagenUrl={prod.imagenUrl}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-nahuelpan-gray">
            No se encontraron productos con ese criterio.
          </p>
        )}
      </div>

    </div>
  );
};
