import React, { useState, useEffect } from 'react';
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

const TokenManagement = () => {
  const [timeLeft, setTimeLeft] = useState(299);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

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
            <h1 className="font-semibold text-base text-on-surface leading-tight">Token Digital</h1>
            <p className="text-xs text-on-surface-variant">Hasilkan kode unik untuk verifikasi serah terima logistik.</p>
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

              {/* ── LEFT: Token Card ── */}
              <div className="lg:col-span-3">
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
                  {/* Card Header */}
                  <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-on-surface">Token Pengiriman</h2>
                      <p className="text-sm text-on-surface-variant mt-0.5">Verifikasi serah terima logistik secara digital</p>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      Aktif
                    </span>
                  </div>

                  {/* Active Handover Section */}
                  <div className="p-6">
                    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 p-5">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-sm font-bold text-primary">Serah Terima Aktif</span>
                        <span className="bg-[#fea619]/10 text-[#855300] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>sync</span>
                          Menunggu Kurir
                        </span>
                      </div>

                      {/* QR Code */}
                      <div className="flex justify-center mb-5">
                        <div className="w-44 h-44 bg-white border-2 border-outline-variant/30 rounded-xl p-2 shadow-sm">
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=TRX-992-81A-${timeLeft}`}
                            alt="QR Code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* OTP Hint */}
                      <p className="text-center text-xs text-outline mb-3">Atau gunakan kode OTP</p>

                      {/* OTP Digits */}
                      <div className="flex gap-2 justify-center mb-4">
                        {['4', '9', '2', '-', '7', '1', '5'].map((char, i) => (
                          <div
                            key={i}
                            className={`w-9 h-11 flex items-center justify-center font-bold text-lg rounded-lg ${
                              char === '-'
                                ? 'text-outline text-xl'
                                : 'bg-surface border border-outline-variant/50 text-on-background shadow-sm'
                            }`}
                          >
                            {char}
                          </div>
                        ))}
                      </div>

                      {/* Timer */}
                      <div className="flex items-center justify-center gap-2 text-[#855300] text-sm font-semibold">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer</span>
                        Berlaku selama {formatTime(timeLeft)}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="mt-5 space-y-3">
                      {[
                        { label: 'ID Pengiriman', value: 'TRX-992-81A', mono: true },
                        { label: 'Tujuan', value: 'SDN 01 Menteng', mono: false },
                        { label: 'Status', value: 'Aman', isStatus: true },
                      ].map(({ label, value, mono, isStatus }) => (
                        <div key={label} className="flex justify-between items-center py-2.5 border-b border-outline-variant/15 last:border-0">
                          <span className="text-sm text-on-surface-variant">{label}</span>
                          {isStatus ? (
                            <span className="text-sm font-semibold text-primary flex items-center gap-1">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                              {value}
                            </span>
                          ) : (
                            <span className={`text-sm font-semibold text-on-surface ${mono ? 'font-mono' : ''}`}>{value}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Refresh Button */}
                    <button className="w-full mt-5 bg-primary text-on-primary py-3 rounded-xl text-sm font-semibold hover:opacity-90 flex items-center justify-center gap-2 transition-opacity">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>refresh</span>
                      Perbarui Token
                    </button>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: History ── */}
              <div className="lg:col-span-2 flex flex-col gap-4">

                {/* History Card */}
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm flex-1">
                  <div className="p-5 border-b border-outline-variant/20 flex items-center justify-between">
                    <h3 className="text-base font-bold text-on-surface">Riwayat Token Hari Ini</h3>
                    <button className="text-primary text-xs font-semibold hover:underline">Lihat Semua</button>
                  </div>
                  <div className="p-4 space-y-3">
                    {/* SDN 04 Cikini - Success */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-on-surface truncate">SDN 04 Cikini</h5>
                        <p className="text-xs text-on-surface-variant mt-0.5">08:45 WIB · Selesai</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-primary shrink-0">#001</span>
                    </div>

                    {/* SMPN 12 - Expired */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>cancel</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-on-surface-variant truncate">SMPN 12 Jakarta</h5>
                        <p className="text-xs text-on-surface-variant mt-0.5">07:30 WIB · Kadaluarsa</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-outline shrink-0">#000</span>
                    </div>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-5">
                  <h4 className="text-sm font-bold text-on-surface mb-4">Ringkasan Hari Ini</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/5 rounded-xl p-3 text-center border border-primary/10">
                      <p className="text-2xl font-bold text-primary">1</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-tight">Berhasil</p>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center border border-outline-variant/20">
                      <p className="text-2xl font-bold text-outline">1</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-tight">Kadaluarsa</p>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-3 text-center border border-outline-variant/20 col-span-2">
                      <p className="text-2xl font-bold text-on-surface">2</p>
                      <p className="text-xs text-on-surface-variant mt-1">Total Token Dibuat</p>
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
};

export default TokenManagement;
