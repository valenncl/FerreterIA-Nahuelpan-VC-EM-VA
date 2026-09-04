import React from 'react';

export const DetalleCategoria: React.FC = () => {
  const productoNombre = 'Taladro';
  const telefonoWhatsApp = '5492800000000'; // Reemplazar por el número real de la ferretería
  
  // Mensaje personalizado dinámico para WhatsApp
  const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Quisiera consultar si tienen disponible el producto: ${productoNombre}`
  );
  const whatsappLink = `https://wa.me/${telefonoWhatsApp}?text=${mensajeWhatsApp}`;

  const miniaturas = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=200&q=80',
  ];

  const categoriasRelacionadas = [
    {
      id: '1',
      nombre: 'Eléctricos',
      imagenUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '2',
      nombre: 'Plomería',
      imagenUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '3',
      nombre: 'Construcción',
      imagenUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 text-nahuelpan-black font-sans">
      {/* Sección Superior: Galería y Ficha Técnica */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Columna Izquierda: Galería e Imágenes */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Imagen Principal */}
          <div className="w-full h-72 sm:h-96 border border-gray-300 overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
              alt={productoNombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fila de Miniaturas */}
          <div className="grid grid-cols-5 gap-2">
            {miniaturas.map((url, idx) => (
              <div
                key={idx}
                className="h-16 sm:h-20 border border-gray-300 overflow-hidden cursor-pointer hover:border-nahuelpan-gold transition-colors"
              >
                <img
                  src={url}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Información de Categoría / Producto */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Título y Badge de Disponibilidad */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-nahuelpan-black">
              {productoNombre}
            </h1>
            <span className="border border-green-500 text-green-500 text-xs px-2.5 py-0.5 font-medium">
              Disponible
            </span>
          </div>

          {/* Sección Descripción (Skeleton lines) */}
          <div>
            <h2 className="text-sm font-bold text-gray-800 mb-2">Descripción</h2>
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-4/5"></div>
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-full"></div>
              <div className="h-2 bg-gray-300 rounded w-3/5"></div>
            </div>
          </div>

          {/* Cuadro Información Adicional */}
          <div className="border border-gray-300 p-4 bg-white shadow-sm flex flex-col gap-3">
            <h3 className="text-sm font-bold text-gray-800">
              Información Adicional
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-gray-600">
              <div className="flex justify-between items-center">
                <span>Subcategorías disponibles</span>
                <div className="h-2 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Marcas</span>
                <div className="h-2 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Última actualización</span>
                <div className="h-2 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>

          {/* Botón Principal de Consultar Disponibilidad vía WhatsApp */}
          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
            >
              <svg
                className="w-6 h-6 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001z" />
              </svg>
              <span>CONSULTAR DISPONIBILIDAD</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sección Categorías Relacionadas */}
      <section className="my-10">
        <h2 className="text-lg font-bold text-gray-800 pb-2 border-b border-gray-300 mb-6">
          Categorías Relacionadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categoriasRelacionadas.map((cat) => (
            <div
              key={cat.id}
              className="border border-gray-300 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-full h-36 overflow-hidden">
                <img
                  src={cat.imagenUrl}
                  alt={cat.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-white">
                <span className="font-bold text-nahuelpan-black text-sm block">
                  {cat.nombre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón Flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001z" />
          </svg>
          <span>Contactarse</span>
        </a>
      </div>
    </div>
  );
};
