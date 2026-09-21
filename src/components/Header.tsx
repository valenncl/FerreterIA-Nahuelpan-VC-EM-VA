import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="w-full bg-black text-white border-b-2 border-nahuelpan-gold sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Identidad / Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
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
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm sm:text-base italic font-bold">
          <Link
            to="/"
            className={`transition-colors hover:text-nahuelpan-gold ${
              isActive('/') ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className={`transition-colors hover:text-nahuelpan-gold ${
              isActive('/nosotros') ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Nosotros
          </Link>
          <Link
            to="/categorias"
            className={`transition-colors hover:text-nahuelpan-gold ${
              isActive('/categorias') ? 'underline underline-offset-4 decoration-2 decoration-white' : ''
            }`}
          >
            Categorías
          </Link>
        </nav>
      </div>
    </header>
  );
};
