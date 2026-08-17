import React, { useState, useEffect } from 'react';
import logonut from '../assets/logonut.png';

const navLinks = [
  { icon: 'restaurant_menu', label: 'Manajemen Dapur', href: '/kitchen' },
  { icon: 'local_shipping', label: 'Logistik', href: '/logistik', active: true },
  { icon: 'pin', label: 'Token Digital', href: '/token' },
  { icon: 'delete_sweep', label: 'Analitik Limbah', href: '/scanner' },
  { icon: 'precision_manufacturing', label: 'Intelijen Pemasok', href: '/supplier' },
  { icon: 'monitoring', label: 'Analitik Nutrisi', href: '/nutrition' },
  { icon: 'psychology', label: 'Rekomendasi AI', href: '/rekomendasi' },
  { icon: 'dashboard', label: 'Dasbor Eksekutif', href: '/dashboard' },
  { icon: 'public', label: 'Portal Publik', href: '/public' },
];

export default function LogistikDistribusi() {
  const [eta, setEta] = useState(14);

  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-on-background flex min-h-screen font-body-md text-body-md">
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-surface-container-low fixed left-0 top-0 bottom-0 w-sidebar-width flex-col py-lg px-md z-[60]">
        <div className="flex items-center justify-center mb-xl px-4 mt-6">
          <img src={logonut} alt="NutriVision" className="w-48 h-20 object-contain" />
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all font-label-md text-label-md ${item.active ? 'bg-primary/10 text-primary border-l-4 border-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}>
              <span className="material-symbols-outlined" style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-auto space-y-4 pt-4 border-t border-outline-variant">
          <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-label-md hover:bg-primary-container transition-colors">Bantuan Sistem</button>
          <a href="/login" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md text-label-md">
            <span className="material-symbols-outlined">logout</span>Keluar
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background">
        <header className="bg-surface shadow-[0_15px_0_0_rgba(25,28,30,0.04)] fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-lg h-16 ml-0 md:ml-[280px]">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-4 py-2 font-body-sm text-body-sm focus:ring-2 focus:ring-primary" placeholder="Cari rute, kendaraan, atau sekolah..." />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>Status: Optimal
            </span>
            <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high"><span className="material-symbols-outlined">notifications</span></button>
            <div className="w-8 h-8 rounded-full border border-outline-variant bg-primary-container flex items-center justify-center text-on-primary-container font-semibold text-sm ml-2">A</div>
          </div>
        </header>

        <div className="pt-24 px-md md:px-lg pb-3xl">
          <div className="mb-lg">
            <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface mb-1">Distribusi Langsung</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Pemantauan armada dan suhu logistik nutrisi secara real-time.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter" style={{ minHeight: '580px' }}>
            {/* Map Area */}
            <div className="xl:col-span-8 bg-surface rounded-xl border border-outline-variant/20 overflow-hidden relative shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)]" style={{ minHeight: '500px' }}>
              <div className="absolute top-4 left-4 z-10 bg-surface/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-sm border border-outline-variant/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">my_location</span>
                <span className="font-label-md text-label-md font-semibold text-on-surface">Wilayah Distribusi: Jakarta Selatan</span>
              </div>

              {/* Map background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1470&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent"></div>

              {/* SVG Route */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,105,72,0.2))' }}>
                <path d="M 200 150 Q 350 200, 400 300 T 600 400" fill="none" stroke="#006948" strokeDasharray="10 6" strokeWidth="4" />
                <path d="M 200 150 Q 250 280, 300 400" fill="none" opacity="0.3" stroke="#bccac0" strokeDasharray="8 8" strokeWidth="3" />
              </svg>

              {/* Hub Pusat */}
              <div className="absolute top-[130px] left-[180px] flex flex-col items-center z-10">
                <div className="w-8 h-8 bg-surface rounded-full shadow-md flex items-center justify-center border-2 border-primary">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>warehouse</span>
                </div>
                <div className="bg-surface/90 px-2 py-1 rounded mt-1 text-[10px] font-semibold text-on-surface">Hub Pusat</div>
              </div>

              {/* Active Vehicle */}
              <div className="absolute top-[280px] left-[370px] flex flex-col items-center group cursor-pointer z-20">
                <div className="w-10 h-10 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 bg-inverse-surface text-inverse-on-surface px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-30">
                  <div className="font-bold">Armada NV-042</div>
                  <div>Kecepatan: 45 km/j</div>
                </div>
              </div>

              {/* School Destination */}
              <div className="absolute top-[380px] left-[560px] flex flex-col items-center z-10">
                <div className="w-8 h-8 bg-secondary-container text-on-secondary-container rounded-full shadow-md flex items-center justify-center border-2 border-surface">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div className="bg-surface/90 px-2 py-1 rounded mt-1 text-[10px] font-semibold text-on-surface">SDN 01 Menteng</div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="xl:col-span-4 flex flex-col gap-gutter">
              {/* ETA Card */}
              <div className="bg-surface rounded-xl border border-outline-variant/20 p-lg shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(25,28,30,0.06)] transition-shadow">
                <div className="flex items-start justify-between mb-md">
                  <div>
                    <h3 className="font-title-lg text-title-lg font-semibold text-on-surface mb-1">Estimasi Tiba (ETA)</h3>
                    <p className="font-label-md text-label-md text-primary font-bold bg-primary/10 px-2 py-1 rounded inline-block">{eta} Menit</p>
                  </div>
                  <span className="material-symbols-outlined text-outline">schedule</span>
                </div>

                {/* Progress */}
                <div className="relative py-6 mb-md">
                  <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-surface-container-highest -translate-y-1/2">
                    <div className="h-full bg-primary w-3/4 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,105,72,0.2)]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-on-surface-variant px-1 mt-4">
                    <span>Hub Pst.</span>
                    <span>Transit</span>
                    <span className="text-primary font-bold">Sekolah</span>
                  </div>
                </div>

                {/* Driver */}
                <div className="border-t border-outline-variant/30 pt-md flex items-center gap-md">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg shrink-0">B</div>
                  <div className="flex-1">
                    <h4 className="font-body-md text-body-md font-semibold text-on-surface">Budi Santoso</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span>4.9 (Armada NV-042)
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>

              {/* Thermal Card */}
              <div className="bg-surface rounded-xl border border-outline-variant/20 p-lg flex-1 flex flex-col shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(25,28,30,0.06)] transition-shadow">
                <div className="flex items-start justify-between mb-md">
                  <div>
                    <h3 className="font-title-lg text-title-lg font-semibold text-on-surface mb-1">Suhu Kotak Kontrol</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Pemantauan Nutrisi Kritis</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">ac_unit</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center py-sm">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-md">
                    <svg className="w-full h-full" style={{ transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e3e5" strokeWidth="8" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#006948" strokeDasharray="283" strokeDashoffset="70" strokeWidth="8" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display-sm text-display-sm font-bold text-on-surface tracking-tighter">4.2°</span>
                      <span className="font-label-md text-label-md text-on-surface-variant">Celcius</span>
                    </div>
                  </div>

                  <div className="w-full px-md space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-on-surface-variant font-medium">Batas Aman</span>
                      <span className="text-on-surface font-semibold">2°C – 6°C</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-on-surface-variant font-medium">Integritas Makanan</span>
                      <span className="text-primary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>Terjaga
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}