import React from 'react';
import logonut from '../assets/logonut.png';

const NutritionAnalytics = () => {
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
          <a href="/nutrition" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary font-semibold hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">monitoring</span> Analitik Nutrisi
          </a>
          <a href="/public" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">public</span> Portal Publik
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background flex flex-col">
        
        {/* Top Navbar */}
        <header className="bg-surface border-b border-outline-variant/30 px-lg h-16 flex items-center justify-between sticky top-0 z-50">
          <h1 className="font-title-lg text-title-lg font-bold text-primary">NutriVision AI</h1>
          <div className="flex gap-4 items-center">
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container-highest">
               <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-lg flex-1">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">Dasbor Dietisien</h2>
              <p className="text-sm text-on-surface-variant mt-1">Rincian pencapaian target nutrisi harian (RDA/AKG) pasien.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-surface border border-outline-variant px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-sm">calendar_today</span> Hari Ini
              </button>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-sm">download</span> Laporan
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30">
              <h3 className="font-title-lg text-title-lg font-semibold text-on-background mb-8">Pencapaian Makronutrien</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-outline uppercase tracking-wider mb-2">Energi (Kalori)</h4>
                  <div className="flex justify-between items-end mb-1">
                    <div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden mr-4">
                      <div className="h-full bg-primary w-[27%]"></div>
                    </div>
                    <div className="text-sm font-semibold text-primary">550 <span className="text-outline text-xs font-normal">/ 2000 kcal</span></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-outline uppercase tracking-wider mb-2">Protein</h4>
                  <div className="flex justify-between items-end mb-1">
                    <div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden mr-4">
                      <div className="h-full bg-secondary-container w-[41%]"></div>
                    </div>
                    <div className="text-sm font-semibold text-secondary-container">25 <span className="text-outline text-xs font-normal">/ 60 g</span></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-outline uppercase tracking-wider mb-2">Karbohidrat</h4>
                  <div className="flex justify-between items-end mb-1">
                    <div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden mr-4">
                      <div className="h-full bg-primary w-[21%]"></div>
                    </div>
                    <div className="text-sm font-semibold text-primary">65 <span className="text-outline text-xs font-normal">/ 300 g</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30">
              <h3 className="font-title-lg text-title-lg font-semibold text-on-background mb-6">Analisis Mikronutrien Kritis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-outline-variant/30 rounded-xl p-4 bg-surface-container-lowest">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">A</div>
                    <span className="text-sm font-semibold text-on-background">Vitamin C</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>45 mg</span>
                    <span className="text-outline">50% AKG</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[50%]"></div>
                  </div>
                </div>

                <div className="border border-error/30 rounded-xl p-4 bg-error-container/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-error/10 text-error flex items-center justify-center font-bold text-xs">O</div>
                    <span className="text-sm font-semibold text-error">Zat Besi</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-error font-semibold">4 mg</span>
                    <span className="text-error font-medium">22% AKG - Rendah</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-error w-[22%]"></div>
                  </div>
                </div>

                <div className="border border-primary/30 rounded-xl p-4 bg-primary-container/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-xs">H4</div>
                    <span className="text-sm font-semibold text-primary">Kalsium</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-primary">800 mg</span>
                    <span className="text-primary font-medium">80% AKG</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-low border-4 border-surface shadow-md overflow-hidden mb-4 p-2">
                 <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                 </div>
              </div>
              <h3 className="font-bold text-on-background text-lg">ID: PT-88241</h3>
              <p className="text-sm text-on-surface-variant mb-6">Diet Khusus: Rendah Sodium</p>
              
              <div className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Status: Dalam Target
              </div>

              <div className="w-full text-left space-y-3 border-t border-outline-variant/30 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Tinggi Badan</span>
                  <span className="font-medium">142 cm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Berat Badan</span>
                  <span className="font-medium">35 kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-outline">BMI</span>
                  <span className="font-medium text-primary">17.3 (Normal)</span>
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

export default NutritionAnalytics;
