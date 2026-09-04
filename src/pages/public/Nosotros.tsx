import React from 'react';

export const Nosotros: React.FC = () => {
  const hitos = [
    { ano: '1978', titulo: 'Fundación', bajada: 'Primer local familiar' },
    { ano: '1995', titulo: 'Expansión', bajada: 'Segunda sede en el centro' },
    { ano: '2010', titulo: '2ª Generación', bajada: 'Hijos toman la dirección' },
    { ano: '2024', titulo: 'Hoy', bajada: 'Modernización digital' },
  ];

  const valores = [
    { titulo: 'Calidad' },
    { titulo: 'Familia' },
    { titulo: 'Confianza' },
    { titulo: 'Servicio' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 text-nahuelpan-black font-sans">
      {/* Banner Imagen Header */}
      <div className="w-full h-40 sm:h-52 overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
          alt="Bulonería y Ferretería Nahuelpan Historia"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
      </div>

      {/* Título Principal y Bajada */}
      <div className="text-center my-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Nuestra Historia
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Fundada en 1978 · Familia García · 3 generaciones de tradición
        </p>
      </div>

      {/* Sección 1: Quiénes Somos */}
      <section className="my-8">
        <h2 className="text-base font-bold text-gray-700 pb-1 border-b border-gray-300 mb-4">
          Quiénes Somos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
              sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per
              conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="w-full h-44 sm:h-48 overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                alt="Frente del local"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Línea de Tiempo */}
      <section className="my-10">
        <h2 className="text-base font-bold text-gray-700 pb-1 border-b border-gray-300 mb-8">
          Línea de Tiempo
        </h2>
        <div className="relative w-full max-w-3xl mx-auto my-6 px-2">
          {/* Línea conectora horizontal */}
          <div className="absolute top-4 left-10 right-10 h-0.5 bg-black z-0 hidden sm:block"></div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10 text-center">
            {hitos.map((hito, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center font-bold text-xs text-black mb-2 shadow-sm">
                  {hito.ano}
                </div>
                <h3 className="font-bold text-xs text-gray-800">{hito.titulo}</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">{hito.bajada}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Nuestros Valores */}
      <section className="my-10">
        <h2 className="text-base font-bold text-gray-700 pb-1 border-b border-gray-300 mb-6">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valores.map((val, idx) => (
            <div key={idx} className="border border-gray-300 p-5 bg-white flex flex-col items-center text-center">
              <span className="text-nahuelpan-gold text-2xl mb-1">★</span>
              <h3 className="font-bold text-xs sm:text-sm text-gray-700 mb-3">{val.titulo}</h3>
              <div className="w-full space-y-1.5 px-2">
                <div className="h-1.5 bg-gray-200 rounded-full w-full"></div>
                <div className="h-1.5 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 4: Imagen Inferior Ancho Completo */}
      <section className="my-8">
        <div className="w-full h-52 sm:h-72 overflow-hidden border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
            alt="Fachada Ferretería Nahuelpan"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Botón Flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          type="button" 
          className="bg-whatsapp hover:brightness-105 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
        >
          <span className="text-lg">💬</span> Contactarse
        </button>
      </div>
    </div>
  );
};
