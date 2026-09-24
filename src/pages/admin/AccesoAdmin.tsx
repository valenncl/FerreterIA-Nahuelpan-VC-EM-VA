import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import logoNahuelpan from '../../assets/images/logo.webp';

interface AccesoAdminProps {
  onLogin: () => void;
}

export function AccesoAdmin({ onLogin }: AccesoAdminProps) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const manejarSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (usuario === 'admin' && password === 'admin123') {
      setError(false);
      setMensaje('');
      onLogin();
      navigate('/admin/dashboard');
      return;
    }
    setError(true);
    setMensaje('');
  };

  return (
    <main 
      aria-label="Acceso administrativo"
      className="min-h-screen flex flex-col bg-[#F6F4EE] font-sans text-white"
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
          className="bg-black border-2 border-[#F9B805] rounded-3xl p-6 sm:p-8 w-full max-w-md flex flex-col items-center space-y-4 shadow-2xl"
        >
          {/* Logo real del negocio */}
          <div aria-hidden="true" className="flex justify-center mb-1">
            <img
              src={logoNahuelpan}
              alt="Logo Bulonería y Ferretería Nahuelpan"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="text-center space-y-1">
            <h2 id="login-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              Acceso Administrativo
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Ingrese sus credenciales<br />para continuar
            </p>
          </div>

          <form noValidate className="w-full space-y-4 mt-2" onSubmit={manejarSubmit}>
            <div>
              <label htmlFor="usuario-admin" className="block text-xs font-semibold text-gray-200 mb-1">
                Usuario o correo electrónico
              </label>
              <input
                id="usuario-admin"
                name="usuario"
                type="text"
                placeholder="Ingresar usuario o correo electrónico..."
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                className="w-full bg-black text-white text-xs sm:text-sm px-3 py-2.5 border border-gray-400 rounded-xl focus:outline-none focus:border-[#F9B805] placeholder-gray-500"
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-black text-white text-xs sm:text-sm px-3 py-2.5 border border-gray-400 rounded-xl focus:outline-none focus:border-[#F9B805] placeholder-gray-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 pt-1">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="recordarme" 
                  className="accent-[#F9B805] rounded border-gray-600 bg-black"
                />
                <span>Recordarme</span>
              </label>
              <button type="button" onClick={() => { setMensaje('Contactá al administrador del sistema para recuperar tu contraseña.'); setError(false); }} className="hover:underline text-gray-300">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full text-center bg-[#F9B805] text-black rounded-xl text-base font-semibold py-2.5 mt-2 hover:brightness-95 transition-colors duration-150 focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </form>

          {error && (
            <div 
              role="alert" 
              aria-live="polite" 
              className="w-full border border-red-600 bg-black p-3 rounded-xl flex items-center justify-center space-x-2 text-red-500 text-xs font-semibold mt-2"
            >
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <p>[mensaje de error: credenciales incorrectas]</p>
            </div>
          )}
          {mensaje && <p role="status" className="w-full text-center text-xs font-semibold text-[#F9B805]">{mensaje}</p>}

          <p className="text-xs text-gray-300 flex items-center justify-center space-x-1 pt-2">
            <span className="text-yellow-500">🔒</span>
            <span>Acceso restringido — solo personal autorizado</span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
