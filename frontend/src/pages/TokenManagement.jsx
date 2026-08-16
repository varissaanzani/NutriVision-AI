import React, { useState, useEffect } from 'react';
import logonut from '../assets/logonut.png';

const TokenManagement = () => {
  const [timeLeft, setTimeLeft] = useState(299); // 4 minutes 59 seconds

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
      <nav className="hidden md:flex bg-surface-container-low fixed left-0 top-0 bottom-0 w-sidebar-width flex-col py-lg px-md z-[60]">
        <div className="flex items-center justify-center mb-xl px-4 mt-6">
          <div className="w-48 h-20 flex items-center justify-center bg-transparent">
            <img src={logonut} alt="NutriVision" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">dashboard</span> Dasbor Eksekutif
          </a>
          <a href="/kitchen" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">restaurant_menu</span> Manajemen Dapur
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">local_shipping</span> Logistik
          </a>
          <a href="/token" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary font-semibold hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">pin</span> Token Digital
          </a>
          <a href="/scanner" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">delete_sweep</span> Analitik Limbah
          </a>
          <a href="/supplier" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">precision_manufacturing</span> Intelijen Pemasok
          </a>
          <a href="/nutrition" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">monitoring</span> Analitik Nutrisi
          </a>
          <a href="/public" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">public</span> Portal Publik
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background p-lg flex flex-col items-center">
        <header className="w-full max-w-lg mb-8 flex justify-between items-center">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">NutriVision AI</h2>
          <button className="text-on-surface-variant"><span className="material-symbols-outlined">notifications</span></button>
        </header>

        <div className="w-full max-w-md bg-surface p-8 rounded-3xl ambient-shadow border border-outline-variant/30 flex flex-col items-center">
          <h3 className="font-title-lg text-title-lg font-semibold text-on-background w-full text-left">Token Pengiriman</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant w-full text-left mb-6">
            Hasilkan kode unik untuk verifikasi serah terima logistik.
          </p>

          <div className="w-full bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-6">
              <span className="font-title-md font-semibold text-primary">Serah Terima Aktif</span>
              <span className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">sync</span> Menunggu Kurir
              </span>
            </div>

            {/* Placeholder for QR Code */}
            <div className="w-48 h-48 bg-white border border-outline-variant/50 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden p-2">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=TRX-992-81A-${timeLeft}`} alt="QR Code" className="w-full h-full object-contain" />
            </div>

            <p className="text-xs text-outline mb-3">Atau gunakan kode OTP</p>
            
            <div className="flex gap-2 mb-4 justify-center">
              {['4', '9', '2', '-', '7', '1', '5'].map((char, i) => (
                <div key={i} className={`w-8 h-10 flex items-center justify-center font-bold text-lg rounded-md ${char === '-' ? 'bg-transparent text-outline' : 'bg-surface-container-low border border-outline-variant/50 text-on-background'}`}>
                  {char}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-secondary text-sm font-semibold">
              <span className="material-symbols-outlined text-sm">timer</span>
              Berlaku selama {formatTime(timeLeft)}
            </div>
          </div>

          <div className="w-full mt-6 space-y-4">
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
              <span className="text-sm text-outline">ID Pengiriman</span>
              <span className="text-sm font-semibold">TRX-992-81A</span>
            </div>
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
              <span className="text-sm text-outline">Tujuan</span>
              <span className="text-sm font-semibold">SDN 01 Menteng</span>
            </div>
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
              <span className="text-sm text-outline">Status</span>
              <span className="text-sm font-semibold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span> Aman
              </span>
            </div>
          </div>

          <button className="w-full mt-8 bg-primary text-on-primary py-3 rounded-xl font-label-md text-sm hover:bg-primary-container flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">refresh</span>
            Perbarui Token
          </button>
        </div>
      </main>
    </div>
  );
};

export default TokenManagement;
