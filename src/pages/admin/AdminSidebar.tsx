type NavKey = 'inicio' | 'categorias' | 'productos' | 'disponibilidad' | 'horarios';

const navItems: Array<{ key: NavKey; label: string; icon: string }> = [
  { key: 'inicio', label: 'Inicio', icon: '🏠' },
  { key: 'categorias', label: 'Categorías', icon: '📦' },
  { key: 'productos', label: 'Productos', icon: '🧰' },
  { key: 'disponibilidad', label: 'Disponibilidad', icon: '📋' },
  { key: 'horarios', label: 'Horarios', icon: '⏰' },
];

export function AdminSidebar({ active = 'inicio' }: { active?: NavKey }) {
  return (
    <aside className="w-full bg-black text-white md:w-56 md:border-r border-b border-zinc-800 md:border-b-0 shrink-0">
      <nav className="flex md:flex-col overflow-x-auto md:overflow-visible py-2 md:py-4 no-scrollbar">
        {navItems.map(({ key, label, icon }) => {
          const isActive = key === active;

          return (
            <a
              key={key}
              href="#"
              aria-current={isActive ? 'page' : undefined}
              className={[
                'flex items-center justify-center md:justify-start gap-2 min-w-[120px] md:min-w-0 px-4 md:px-6 py-3 text-xs md:text-sm font-bold border-b border-amber-500/30 md:border-b transition-colors',
                isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-900 text-gray-200',
              ].join(' ')}
            >
              <span>{icon}</span>
              <span className="whitespace-nowrap">{label}</span>
            </a>
          );
        })}

        <a
          href="#"
          className="flex items-center justify-center md:justify-start gap-2 min-w-[140px] md:min-w-0 px-4 md:px-6 py-3 text-xs md:text-sm font-bold hover:bg-zinc-900 text-gray-200 transition-colors md:mt-2"
        >
          <span>🚪</span>
          <span>Cerrar sesión</span>
        </a>
      </nav>
    </aside>
  );
}
