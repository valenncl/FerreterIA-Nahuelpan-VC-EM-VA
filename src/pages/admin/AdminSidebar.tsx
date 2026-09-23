import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavKey = 'inicio' | 'categorias' | 'productos' | 'disponibilidad' | 'horarios';

const navItems: Array<{ key: NavKey; label: string; icon: string; to: string }> = [
  { key: 'inicio', label: 'Inicio', icon: '🏠', to: '/admin/dashboard' },
  { key: 'categorias', label: 'Categorías', icon: '📦', to: '/admin/categorias' },
  { key: 'productos', label: 'Productos', icon: '🧰', to: '/admin/productos' },
  { key: 'disponibilidad', label: 'Disponibilidad', icon: '📋', to: '/admin/disponibilidad' },
  { key: 'horarios', label: 'Horarios', icon: '⏰', to: '/admin/disponibilidad' },
];

interface AdminSidebarProps {
  active: NavKey;
  onLogout: () => void;
}

export function AdminSidebar({ active, onLogout }: AdminSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/admin');
  };

  return (
    <aside className="w-full bg-black text-white md:w-60 md:border-r border-b border-zinc-800 md:border-b-0 shrink-0 md:p-3">
      <nav className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 py-2 md:py-3 no-scrollbar md:rounded-2xl md:bg-zinc-950 md:p-2">
        {navItems.map(({ key, label, icon, to }) => {
          const isActive = key === active || location.pathname === to;

          return (
            <Link
              key={key}
              to={to}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'flex items-center justify-center md:justify-start gap-3 min-w-[120px] md:min-w-0 px-4 md:px-4 py-3 text-xs md:text-sm font-bold rounded-xl transition-colors',
                isActive ? 'bg-zinc-800 text-white shadow-sm border-l-4 border-[#F9B805]' : 'hover:bg-zinc-800 text-gray-400',
              ].join(' ')}
            >
              <span>{icon}</span>
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center justify-center md:justify-start gap-3 min-w-[140px] md:min-w-0 px-4 md:px-4 py-3 text-xs md:text-sm font-bold rounded-xl hover:bg-zinc-800 text-gray-400 transition-colors md:mt-4"
        >
          <span>🚪</span>
          <span>Cerrar sesión</span>
        </button>
      </nav>
    </aside>
  );
}
