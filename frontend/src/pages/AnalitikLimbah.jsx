import React, { useState } from 'react';
import logonut from '../assets/logonut.png';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { icon: 'restaurant_menu', label: 'Manajemen Dapur', href: '/kitchen' },
  { icon: 'local_shipping', label: 'Logistik', href: '/logistik' },
  { icon: 'pin', label: 'Token Digital', href: '/token' },
  { icon: 'delete_sweep', label: 'Analitik Limbah', href: '/scanner' },
  { icon: 'precision_manufacturing', label: 'Intelijen Pemasok', href: '/supplier' },
  { icon: 'monitoring', label: 'Analitik Nutrisi', href: '/nutrition' },
  { icon: 'psychology', label: 'Rekomendasi AI', href: '/rekomendasi' },
  { icon: 'dashboard', label: 'Dasbor Eksekutif', href: '/dashboard' },
  { icon: 'public', label: 'Portal Publik', href: '/public' },
];

export default function AnalitikLimbah() {
  const [scanMode, setScanMode] = useState('setelah');
  const location = useLocation();

  return (
    <div className="bg-background text-on-background flex min-h-screen font-body-md text-body-md">
      {/* ── SideNavBar ── */}
      <nav className="hidden md:flex bg-surface-container-low fixed left-0 top-0 bottom-0 w-[280px] flex-col py-6 px-4 z-[60]">
        <div className="flex items-center justify-center mb-8 px-2 mt-2">
          <img src={logonut} alt="NutriVision" className="w-44 h-16 object-contain" />
        </div>
        <div className="flex-1 overflow-y-auto space-y-1">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-sm ${
                  isActive
                    ? 'bg-primary/10 text-primary border-l-4 border-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-highest border-l-4 border-transparent'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1", fontSize: '20px' } : { fontSize: '20px' }}
                >
                  {item.icon}
                </span>
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="mt-auto space-y-2 pt-4 border-t border-outline-variant">
          <button className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
            Bantuan Sistem
          </button>
          <a
            href="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-highest transition-all text-sm"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
            Keluar
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-0 md:ml-[280px] min-h-screen bg-background flex flex-col">

        {/* Top Navbar */}
        <header className="bg-surface border-b border-outline-variant/30 px-6 h-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
          <div className="flex flex-col">
            <h1 className="font-semibold text-base text-on-surface leading-tight">Analitik Limbah</h1>
            <p className="text-xs text-on-surface-variant">Pindai nampan untuk mendeteksi dan mencatat sisa makanan.</p>
          </div>
          <div className="flex gap-3 items-center">
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-outline-variant">
              <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

              {/* ── LEFT: Scanner Viewport ── */}
              <div className="lg:col-span-3">
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
                  {/* Card Header */}
                  <div className="p-5 border-b border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-on-surface">Pindai Nampan</h2>
                      <p className="text-xs text-on-surface-variant mt-0.5">Sejajarkan nampan di dalam area deteksi</p>
                    </div>
                    {/* Mode Toggle */}
                    <div className="bg-surface-container-low rounded-full p-1 flex border border-outline-variant/30">
                      <button
                        onClick={() => setScanMode('sebelum')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          scanMode === 'sebelum'
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        Sebelum Makan
                      </button>
                      <button
                        onClick={() => setScanMode('setelah')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          scanMode === 'setelah'
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        Setelah Makan
                      </button>
                    </div>
                  </div>

                  {/* Scanner Viewport */}
                  <div className="relative overflow-hidden" style={{ height: '380px' }}>
                    {/* Background image */}
                    <img
                      src="https://images.unsplash.com/photo-1574513337910-53bc30e3f16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Food tray"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                    {/* Scanning Frame */}
                    <div
                      className="absolute border-2 border-primary/60 rounded-2xl"
                      style={{ top: '15%', left: '20%', right: '20%', bottom: '20%' }}
                    >
                      {/* Corners */}
                      <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl"></div>
                      <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-[3px] border-r-[3px] border-primary rounded-tr-xl"></div>
                      <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-[3px] border-l-[3px] border-primary rounded-bl-xl"></div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-[3px] border-r-[3px] border-primary rounded-br-xl"></div>

                      {/* Detection labels */}
                      {scanMode === 'setelah' && (
                        <>
                          <div className="absolute top-[15%] left-[10%] bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></div>
                            <span className="text-white text-xs font-bold">Nasi 90%</span>
                          </div>
                          <div className="absolute bottom-[25%] right-[8%] bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                            <div className="w-2 h-2 rounded-full bg-[#FFB74D] animate-pulse shrink-0"></div>
                            <span className="text-white text-xs font-bold">Protein 95%</span>
                          </div>
                          {/* Scan line animation */}
                          <div
                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(0,105,72,0.8)]"
                            style={{ animation: 'scanLine 2.5s ease-in-out infinite' }}
                          ></div>
                        </>
                      )}
                    </div>

                    {/* Flash button */}
                    <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>flash_off</span>
                    </button>
                  </div>

                  {/* Result Section */}
                  <div className="p-5">
                    {scanMode === 'setelah' ? (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-error-container/20 border border-error/20">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-error-container flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-error" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>eco</span>
                          </div>
                          <div>
                            <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Limbah Terdeteksi</p>
                            <div className="flex items-baseline gap-1 mt-0.5">
                              <span className="text-2xl font-bold text-error">4.2%</span>
                              <span className="text-xs text-on-surface-variant">dari total porsi</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-surface border border-outline-variant/50 text-on-surface px-3 py-2 rounded-xl text-xs font-semibold hover:bg-surface-container-low transition-colors">
                            Ulangi
                          </button>
                          <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                            Simpan
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                        <p className="text-sm text-on-surface-variant">Ambil foto nampan sebelum makan untuk mulai perbandingan</p>
                      </div>
                    )}

                    {/* Capture Button */}
                    <div className="flex justify-center mt-5">
                      <button className="w-16 h-16 rounded-full border-4 border-primary/30 flex items-center justify-center hover:border-primary/60 transition-colors group">
                        <div className="w-12 h-12 bg-primary rounded-full group-hover:scale-95 transition-transform shadow-md flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Stats & Logs ── */}
              <div className="lg:col-span-2 flex flex-col gap-4">

                {/* Today's Summary */}
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-on-surface mb-4">Ringkasan Hari Ini</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-error">4.2%</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-tight">Rata-rata Limbah</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-on-surface">12</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-tight">Nampan Dipindai</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">88%</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-tight">Tingkat Habis</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-on-surface-variant mb-1.5">
                      <span>Tingkat Habis Makanan</span>
                      <span className="font-semibold text-primary">88%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Komponen Terdeteksi */}
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-5">
                  <h3 className="text-sm font-bold text-on-surface mb-4">Komponen Terdeteksi</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Karbohidrat (Nasi)', pct: 90, color: 'bg-primary' },
                      { label: 'Protein', pct: 95, color: 'bg-[#fea619]' },
                      { label: 'Serat (Sayur)', pct: 60, color: 'bg-tertiary' },
                    ].map(({ label, pct, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-on-surface-variant">{label}</span>
                          <span className="font-semibold text-on-surface">{pct}% habis</span>
                        </div>
                        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Log Terbaru */}
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm flex-1">
                  <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-on-surface">Log Terbaru</h3>
                    <button className="text-primary text-xs font-semibold hover:underline">Lihat Semua</button>
                  </div>
                  <div className="p-4 space-y-2.5">
                    {[
                      { name: 'Dapur #43', location: 'Jawa Barat', waste: '12.4%', status: 'kritis', time: '2j lalu' },
                      { name: 'Dapur #12', location: 'DKI Jakarta', waste: '3.2%', status: 'optimal', time: '3j lalu' },
                      { name: 'Dapur #28', location: 'Jawa Tengah', waste: '7.8%', status: 'peringatan', time: '4j lalu' },
                    ].map(({ name, location, waste, status, time }) => {
                      const statusStyle = {
                        kritis: 'text-error bg-error-container/40',
                        peringatan: 'text-[#855300] bg-[#fea619]/15',
                        optimal: 'text-primary bg-primary/10',
                      }[status];
                      return (
                        <div key={name} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors">
                          <div>
                            <p className="text-sm font-semibold text-on-surface">{name}</p>
                            <p className="text-xs text-on-surface-variant">{location} · {time}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-on-surface font-mono">{waste}</span>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyle}`}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes scanLine {
          0%, 100% { top: 5%; opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { top: 90%; }
        }
      `}</style>
    </div>
  );
}
