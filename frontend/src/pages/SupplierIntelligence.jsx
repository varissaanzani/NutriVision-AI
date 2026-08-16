import React from 'react';
import logonut from '../assets/logonut.png';

const SupplierIntelligence = () => {
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
          <a href="/supplier" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary font-semibold hover:bg-surface-container-highest transition-all font-label-md text-label-md">
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
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background p-lg">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">Intelijen Pemasok</h2>
            <p className="text-sm text-on-surface-variant mt-1">Penilaian Kinerja Katering (SPPG) Berbasis AI</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-4 py-2 rounded-xl flex items-center gap-2 border border-outline-variant">
              <span className="material-symbols-outlined text-outline">search</span>
              <input type="text" placeholder="Cari mitra katering..." className="bg-transparent outline-none font-body-sm" />
            </div>
            <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
          </div>
        </header>

        {/* Dashboard Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <p className="font-body-sm text-on-surface-variant">Mitra Terverifikasi</p>
              <h3 className="font-display-sm font-bold text-on-background">1,204</h3>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
            </div>
            <div>
              <p className="font-body-sm text-on-surface-variant">Rata-rata Skor Kinerja</p>
              <h3 className="font-display-sm font-bold text-on-background">87.5 <span className="text-sm font-normal text-outline">/ 100</span></h3>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <div>
              <p className="font-body-sm text-on-surface-variant">Peringatan Evaluasi</p>
              <h3 className="font-display-sm font-bold text-on-background text-error">12 <span className="text-sm font-normal text-outline">Mitra</span></h3>
            </div>
          </div>
        </div>

        {/* Supplier List */}
        <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/50 text-sm text-on-surface-variant">
                <th className="px-6 py-4 font-semibold">Nama Katering / SPPG</th>
                <th className="px-6 py-4 font-semibold">Skor AI</th>
                <th className="px-6 py-4 font-semibold">Ketepatan Waktu</th>
                <th className="px-6 py-4 font-semibold">Kualitas & Gizi</th>
                <th className="px-6 py-4 font-semibold">Tingkat Limbah</th>
                <th className="px-6 py-4 font-semibold">Rekomendasi</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-outline-variant/20">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-medium text-on-background">Katering Sehat Nusantara<br/><span className="text-xs text-outline font-normal">ID: SPPG-1102</span></td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md font-bold">
                    94
                  </div>
                </td>
                <td className="px-6 py-4">98%</td>
                <td className="px-6 py-4">Sangat Baik</td>
                <td className="px-6 py-4">2.1% (Rendah)</td>
                <td className="px-6 py-4"><span className="text-primary font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">thumb_up</span> Pertahankan Kontrak</span></td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-medium text-on-background">CV Maju Bersama Gizi<br/><span className="text-xs text-outline font-normal">ID: SPPG-0841</span></td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1 bg-secondary-container/30 text-secondary-container px-2 py-1 rounded-md font-bold">
                    82
                  </div>
                </td>
                <td className="px-6 py-4">92%</td>
                <td className="px-6 py-4">Baik</td>
                <td className="px-6 py-4">4.5% (Sedang)</td>
                <td className="px-6 py-4"><span className="text-on-surface-variant font-medium">Bina Lanjut</span></td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors bg-error-container/5">
                <td className="px-6 py-4 font-medium text-on-background">Boga Rasa Menteng<br/><span className="text-xs text-outline font-normal">ID: SPPG-4412</span></td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-1 bg-error-container text-on-error-container px-2 py-1 rounded-md font-bold">
                    58
                  </div>
                </td>
                <td className="px-6 py-4 text-error font-medium">75%</td>
                <td className="px-6 py-4">Cukup</td>
                <td className="px-6 py-4 text-error font-medium">12.4% (Tinggi)</td>
                <td className="px-6 py-4"><span className="text-error font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">warning</span> Evaluasi Kontrak</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default SupplierIntelligence;
