import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'nosotros' | 'categorias' | 'productos'>('inicio');

  return (
    <header className="w-full bg-black text-white border-b-2 border-nahuelpan-gold sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Identidad / Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full border-2 border-red-600 bg-black flex items-center justify-center font-black text-nahuelpan-red text-lg shadow-sm">
            N
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs sm:text-sm font-bold text-gray-200">
              Bulonería y Ferretería
            </span>
            <span className="text-sm sm:text-base font-black text-white tracking-wide">
              Nahuelpan
            </span>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm sm:text-base italic font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('inicio')}
            className={`transition-colors hover:text-nahuelpan-gold ${
              activeTab === 'inicio' ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Inicio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nosotros')}
            className={`transition-colors hover:text-nahuelpan-gold ${
              activeTab === 'nosotros' ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Nosotros
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('categorias')}
            className={`transition-colors hover:text-nahuelpan-gold ${
              activeTab === 'categorias' ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Categorías
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('productos')}
            className={`transition-colors hover:text-nahuelpan-gold ${
              activeTab === 'productos' ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Productos
          </button>
        </nav>
      </div>
    </header>
  );
};
