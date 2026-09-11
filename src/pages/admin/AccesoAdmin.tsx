import React from 'react';


export function AccesoAdmin() {
  return (
    <main 
      aria-label="Acceso administrativo"
      className="min-h-screen flex flex-col bg-white font-sans text-white"
    >

      <header className="bg-black py-3 px-4 border-t-2 border-b-2 border-red-700 text-center shadow-md">
        <h1 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
          Bulonería y Ferretería Nahuelpan — Área Administrativa
        </h1>
      </header>

      <section 
        aria-labelledby="login-title"
        className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-white"
      >
        <div 
          aria-label="Formulario de acceso administrativo"
          className="bg-black border-4 border-yellow-500 rounded-sm p-6 sm:p-8 w-full max-w-md flex flex-col items-center space-y-4 shadow-2xl"
        >
          

          <div aria-hidden="true" className="flex justify-center mb-1">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4"/>
              <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
            </svg>
          </div>

          <div className="text-center space-y-1">
            <h2 id="login-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              Acceso Administrativo
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Ingrese sus credenciales<br />para continuar
            </p>
          </div>

          <form noValidate className="w-full space-y-4 mt-2">
            
            <div>
              <label htmlFor="usuario-admin" className="block text-xs font-semibold text-gray-200 mb-1">
                Usuario o correo electrónico
              </label>
              <input
                id="usuario-admin"
                name="usuario"
                type="text"
                placeholder="Ingresar usuario o correo electrónico..."
                className="w-full bg-black text-white text-xs sm:text-sm px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-500 placeholder-gray-500"
              />
            </div>

            <div>
              <label htmlFor="password-admin" className="block text-xs font-semibold text-gray-200 mb-1">
                Contraseña
              </label>
              <input
                id="password-admin"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-black text-white text-xs sm:text-sm px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-500 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 pt-1">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="recordarme" 
                  className="accent-yellow-500 rounded border-gray-600 bg-black"
                />
                <span>Recordarme</span>
              </label>

              <a href="#" className="hover:underline text-gray-300">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full text-center text-white text-base font-semibold py-2 mt-2 hover:text-yellow-400 transition-colors duration-150 focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </form>

          <div 
            role="alert" 
            aria-live="polite" 
            className="w-full border border-red-600 bg-black p-2 rounded flex items-center justify-center space-x-2 text-red-500 text-xs font-semibold mt-2"
          >
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <p>[mensaje de error: credenciales incorrectas]</p>
          </div>

          <p className="text-xs text-gray-300 flex items-center justify-center space-x-1 pt-2">
            <span className="text-yellow-500">🔒</span>
            <span>Acceso restringido — solo personal autorizado</span>
          </p>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-red-700 py-6 px-8 flex flex-col sm:flex-row items-center justify-between text-white space-y-6 sm:space-y-0">

        <nav className="flex flex-col space-y-1 text-sm italic font-bold text-left w-full sm:w-auto">
          <a href="#" className="hover:text-yellow-400 transition-colors">Inicio</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Nosotros</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Categorías</a>
        </nav>

        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="black" stroke="#C92C23" strokeWidth="4"/>
            <path d="M30 65V35L70 35V65M50 35V65" stroke="#C92C23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">NAHUELPAN</text>
          </svg>
          <p className="text-xs italic font-bold text-gray-200">
            © Bulonería y Ferretería Nahuelpan – Todos los derechos reservados
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram" className="text-yellow-500 hover:text-yellow-400 transition-colors">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a href="#" aria-label="Facebook" className="text-yellow-500 hover:text-yellow-400 transition-colors">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}