import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: 'restaurant_menu', label: 'Manajemen Dapur', path: '/dapur' },
  { icon: 'local_shipping', label: 'Logistik', path: '/logistik' },
  { icon: 'pin', label: 'Token Digital', path: '/token' },
  { icon: 'delete_sweep', label: 'Analitik Limbah', path: '/limbah' },
  { icon: 'precision_manufacturing', label: 'Intelijen Pemasok', path: '/pemasok' },
  { icon: 'monitoring', label: 'Analitik Nutrisi', path: '/nutrisi' },
  { icon: 'psychology', label: 'Rekomendasi AI', path: '/rekomendasi' },
  { icon: 'dashboard', label: 'Dasbor Eksekutif', path: '/' },
  { icon: 'public', label: 'Portal Publik', path: '/portal' },
];

export default function Sidebar() {
  return (
    <nav className="hidden md:flex bg-surface-container-low fixed left-0 top-0 bottom-0 w-sidebar-width flex-col py-lg px-md z-60">
      {/* Logo */}
      <div className="flex items-center gap-4 mb-xl px-4">
        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            energy_savings_leaf
          </span>
        </div>
        <div>
          <h1 className="text-headline-md font-bold text-primary">NutriVision AI</h1>
          <p className="text-label-md text-on-surface-variant">Intelligence Suite</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-label-md ${
                isActive
                  ? 'bg-primary/10 text-primary border-l-4 border-primary font-semibold scale-[0.98]'
                  : 'text-on-surface-variant hover:bg-surface-container-highest border-l-4 border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto space-y-4 pt-4 border-t border-outline-variant">
        <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg text-label-md hover:bg-primary-container transition-colors">
          Bantuan Sistem
        </button>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all text-label-md"
        >
          <span className="material-symbols-outlined">logout</span>
          Keluar
        </a>
      </div>
    </nav>
  );
}
