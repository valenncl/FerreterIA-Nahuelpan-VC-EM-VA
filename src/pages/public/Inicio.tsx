import React from 'react';
import { CategoriaCard } from '../../components/CategoriaCard';

export const Inicio: React.FC = () => {
  const categoriasDestacadas = [
    {
      id: '1',
      nombre: 'Herramientas',
      imagenUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '2',
      nombre: 'Sanitarios',
      imagenUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '3',
      nombre: 'Pinturería',
      imagenUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: '4',
      nombre: 'Electricidad',
      imagenUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 text-nahuelpan-black font-sans">
      {/* Banner Principal / Hero */}
      <section className="relative w-full h-[280px] sm:h-[340px] bg-black/80 flex items-center justify-center text-center p-4 rounded-sm overflow-hidden bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80')] bg-center bg-cover bg-blend-overlay">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl sm:text-6xl font-black text-nahuelpan-red tracking-wider drop-shadow-lg uppercase">
            NAHUELPAN
          </h1>
          <h2 className="text-base sm:text-xl font-extrabold text-nahuelpan-red mb-6 tracking-widest uppercase">
            BULONERÍA Y FERRETERÍA
          </h2>
          <button 
            type="button" 
            className="bg-nahuelpan-red hover:bg-nahuelpan-red/90 text-white font-bold px-8 py-2.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md"
          >
            VER CATÁLOGO
          </button>
        </div>
      </section>

      {/* Sección Bienvenida e Información General */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 items-start">
        {/* Columna Izquierda: Texto de Bienvenida */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-nahuelpan-black leading-tight">
            Bienvenido a Bulonería y Ferretería Nahuelpan
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-nahuelpan-gray">
            Especialistas en bulonería y fijaciones de alta resistencia en Trelew. Contamos con el stock esencial de bulones, tuercas, arandelas, roscas y herramientas indispensables para que encuentres exactamente lo que tu proyecto o taller necesita, sin vueltas. Además, compartimos tips de construcción y decoración para ayudarte a llevar a cabo tus ideas de la mejor manera.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
              type="button" 
              className="bg-nahuelpan-red hover:bg-nahuelpan-red/90 text-white font-bold px-6 py-2.5 rounded text-sm transition-all"
            >
              Ver Categorías
            </button>
            <button 
              type="button" 
              className="bg-nahuelpan-gold hover:bg-nahuelpan-gold/90 text-nahuelpan-black font-bold px-6 py-2.5 rounded text-sm transition-all"
            >
              Contactanos
            </button>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Información General */}
        <div className="lg:col-span-5 border-[3px] border-nahuelpan-gold p-6 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-nahuelpan-red mb-4">
            Información General
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-nahuelpan-black">
            <li className="leading-snug">
              <strong>Dirección:</strong> Cacique Nahuelpan Nte. 868, U9100 Trelew, Chubut, Argentina
            </li>
            <li className="leading-snug">
              <strong>Teléfono de contacto:</strong>{' '}
              <span className="underline decoration-nahuelpan-black">0280 424-0468</span>
            </li>
            <li className="leading-snug">
              <strong>Horario de Atención:</strong>
              <ul className="mt-1.5 ml-2 flex flex-col gap-1 text-xs sm:text-sm text-nahuelpan-gray list-disc list-inside">
                <li>Lunes a viernes: 10:00 a 14:00 hs y de 16:00 a 20:00 hs</li>
                <li>Sábados: 10:00 a 16:00 hs (corrido)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección Categorías Destacadas */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-nahuelpan-gold text-nahuelpan-black">
          Categorías Destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriasDestacadas.map((cat) => (
            <CategoriaCard key={cat.id} nombre={cat.nombre} imagenUrl={cat.imagenUrl} />
          ))}
        </div>
      </section>

      {/* Sección Ubicación y Horarios */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
        {/* Cómo Llegar */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-nahuelpan-gold text-nahuelpan-black">
            Cómo Llegar
          </h2>
          <div className="w-full border border-gray-300 overflow-hidden shadow-sm">
            <iframe
              title="Ubicación Ferretería Nahuelpan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.8238120302837!2d-65.3115!3d-43.2533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzExLjkiUyA2NcKwMTgnNDEuNCJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Horarios e Imagen del Frente */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-nahuelpan-gold text-nahuelpan-black">
              Horarios
            </h2>
            <table className="w-full mb-6 text-base">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 font-semibold text-nahuelpan-black">Lunes – Viernes</td>
                  <td className="py-2.5 text-right text-nahuelpan-black font-medium">8:00 am – 6:00 pm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 font-semibold text-nahuelpan-black">Sábado</td>
                  <td className="py-2.5 text-right text-nahuelpan-black font-medium">8:00 am – 2:00 pm</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-semibold text-nahuelpan-black">Domingo</td>
                  <td className="py-2.5 text-right font-bold text-nahuelpan-red">Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full h-44 sm:h-52 overflow-hidden border border-gray-300 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
              alt="Frente del local comercial Nahuelpan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Botón Flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          type="button" 
          className="bg-whatsapp hover:brightness-105 text-white font-bold px-5 py-3 rounded-full text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
        >
          <span className="text-lg">💬</span> Contactarse
        </button>
      </div>
    </div>
  );
};
