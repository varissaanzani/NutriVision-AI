import { NavLink } from 'react-router-dom';

const tabs = [
  { icon: 'dashboard', label: 'Dasbor', path: '/dashboard' },
  { icon: 'kitchen', label: 'Dapur', path: '/kitchen' },
  { icon: 'qr_code_scanner', label: 'Token', path: '/token' },
  { icon: 'camera', label: 'Limbah', path: '/scanner' },
  { icon: 'person', label: 'Profil', path: '/public' },
];

export default function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface shadow-[0_-4px_15px_rgba(0,0,0,0.04)] rounded-t-xl">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-transform ${
              isActive
                ? 'bg-primary-container text-on-primary-container rounded-xl px-4 py-1 scale-95'
                : 'text-on-surface-variant'
            }`
          }
        >
          <span className="material-symbols-outlined">{tab.icon}</span>
          <span className="text-[10px] mt-1">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
