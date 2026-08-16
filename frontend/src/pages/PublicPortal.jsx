import React from 'react';
import logonut from '../assets/logonut.png';

const PublicPortal = () => {
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
          <a href="/token" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
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
          <a href="/public" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary font-semibold hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">public</span> Portal Publik
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background">
        <header className="flex justify-between items-center p-6 border-b border-outline-variant/30">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-background text-primary">Portal Nutrisi Publik</h2>
          <div className="flex gap-4 items-center">
            <button className="text-on-surface-variant"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant"><span className="material-symbols-outlined">settings</span></button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container-highest">
               <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-lg">
          {/* Hero Section */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg border border-outline-variant/20 flex items-center p-12">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
               <div className="w-full h-full bg-gradient-to-r from-surface-container-lowest to-transparent absolute inset-0 z-10"></div>
               <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80" alt="Healthy eating" className="w-full h-full object-cover opacity-70" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-xl">
              <span className="inline-block bg-primary-container text-primary font-label-md px-3 py-1 rounded-full mb-6 uppercase tracking-widest font-bold">
                TRANSPARANSI NUTRISI
              </span>
              <h1 className="font-display-lg text-display-lg font-bold text-on-background leading-tight mb-4">
                Bersama Mewujudkan <span className="text-primary">Gizi Seimbang</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 opacity-90 leading-relaxed">
                Akses terbuka ke data pencapaian program nutrisi, metrik pengelolaan limbah cerdas, dan sumber daya edukasi kesehatan untuk seluruh warga.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-title-md font-semibold hover:bg-primary-container hover:text-primary transition-colors ambient-shadow">
                  Jelajahi Data
                </button>
                <button className="bg-surface/80 backdrop-blur border border-outline-variant text-on-surface px-8 py-3 rounded-xl font-title-md font-semibold hover:bg-surface-container-low transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicPortal;
