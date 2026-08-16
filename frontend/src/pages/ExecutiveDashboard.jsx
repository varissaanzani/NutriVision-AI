import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logonut from '../assets/logonut.png';

const ExecutiveDashboard = () => {
  const [distributions, setDistributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDistributions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/distributions');
        setDistributions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDistributions();
  }, []);

  return (
    <div className="bg-background text-on-background flex min-h-screen font-body-md text-body-md">

      {/* ── SideNavBar ── */}
      <nav className="hidden md:flex bg-surface-container-low fixed left-0 top-0 bottom-0 w-sidebar-width flex-col py-lg px-md z-[60]">
        {/* Logo */}
        <div className="flex items-center justify-center mb-xl px-4 mt-6">
          <div className="w-48 h-20 flex items-center justify-center bg-transparent">
            <img src={logonut} alt="NutriVision" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {/* Active item (Moved to top) */}
          <a
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-4 border-primary font-semibold hover:bg-surface-container-highest transition-all font-label-md text-label-md"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dasbor Eksekutif
          </a>

          {[
            { icon: 'restaurant_menu', label: 'Manajemen Dapur', href: '/kitchen' },
            { icon: 'local_shipping', label: 'Logistik', href: '#' },
            { icon: 'pin', label: 'Token Digital', href: '/token' },
            { icon: 'delete_sweep', label: 'Analitik Limbah', href: '/scanner' },
            { icon: 'precision_manufacturing', label: 'Intelijen Pemasok', href: '#' },
            { icon: 'monitoring', label: 'Analitik Nutrisi', href: '/nutrition' },
            { icon: 'psychology', label: 'Rekomendasi AI', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </a>
          ))}

          <a href="/public" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">public</span>
            Portal Publik
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-auto space-y-4 pt-4 border-t border-outline-variant">
          <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors">
            Bantuan Sistem
          </button>
          <a href="/login" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-medium hover:bg-surface-container-highest transition-all font-label-md text-label-md">
            <span className="material-symbols-outlined">logout</span>
            Keluar
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-0 md:ml-sidebar-width min-h-screen bg-background">

        {/* TopNavBar */}
        <header className="bg-surface shadow-[0_15px_0_0_rgba(25,28,30,0.04)] fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-lg h-16 ml-0 md:ml-[280px] shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full bg-surface-container-low border-outline-variant border rounded-xl pl-10 pr-4 py-2 font-body-sm text-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Cari data, metrik, atau lokasi..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden ml-4 border border-outline-variant bg-primary-container flex items-center justify-center text-on-primary-container font-semibold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="pt-24 px-md md:px-lg pb-3xl max-w-container-max mx-auto space-y-gutter">

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">Tinjauan Nasional</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Pemantauan real-time performa program BGN di seluruh wilayah.
              </p>
            </div>
            <div className="flex gap-3">
              <select className="bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm py-2 pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary">
                <option>Semua Wilayah</option>
                <option>Jawa</option>
                <option>Sumatera</option>
              </select>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Laporan
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface rounded-xl p-lg ambient-shadow hover-ambient-shadow transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="font-label-md text-label-md text-primary bg-primary/10 px-2 py-1 rounded-full">+12.5%</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Makanan Terdistribusi</p>
              <h3 className="font-display-sm text-display-sm font-bold text-on-background">
                {loading ? '...' : '2.4M'}
              </h3>
              <p className="font-label-md text-label-md text-outline mt-2">Bulan ini</p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface rounded-xl p-lg ambient-shadow hover-ambient-shadow transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined">recycling</span>
                </div>
                <span className="font-label-md text-label-md text-secondary bg-secondary-container/20 px-2 py-1 rounded-full">-2.1%</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Rata-rata % Limbah</p>
              <h3 className="font-display-sm text-display-sm font-bold text-on-background">4.8%</h3>
              <p className="font-label-md text-label-md text-outline mt-2">Target: &lt; 5%</p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface rounded-xl p-lg ambient-shadow hover-ambient-shadow transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <span className="font-label-md text-label-md text-primary bg-primary/10 px-2 py-1 rounded-full">+45</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Dapur Aktif</p>
              <h3 className="font-display-sm text-display-sm font-bold text-on-background">1,204</h3>
              <p className="font-label-md text-label-md text-outline mt-2">Nasional</p>
            </div>
          </div>

          {/* Map and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Map Area */}
            <div className="lg:col-span-2 bg-surface rounded-xl p-lg ambient-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title-lg text-title-lg font-semibold text-on-background">Peta Distribusi Nasional</h3>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                  <button className="p-1.5 rounded bg-surface-container text-on-surface hover:bg-surface-container-high">
                    <span className="material-symbols-outlined text-sm">zoom_out</span>
                  </button>
                </div>
              </div>
              <div className="w-full h-[400px] rounded-lg bg-surface-container-low overflow-hidden relative border border-outline-variant/30">
                {/* Map placeholder with Indonesia silhouette look */}
                <div className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8f5ee 0%, #f0faf4 50%, #e4f2ea 100%)',
                  }}>
                  {/* Simple SVG Indonesia map outline placeholder */}
                  <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-primary/30" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                    <p className="text-sm text-outline mt-2">Peta Interaktif Indonesia</p>
                    <p className="text-xs text-outline/70 mt-1">1,204 Dapur Aktif Terpantau</p>
                  </div>
                  {/* Dot markers */}
                  <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-primary animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(0,105,72,0.2)' }} />
                  <div className="absolute top-[45%] left-[50%] w-3 h-3 rounded-full bg-primary animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(0,105,72,0.2)', animationDelay: '0.5s' }} />
                  <div className="absolute top-[55%] left-[65%] w-3 h-3 rounded-full bg-secondary-container animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(254,166,25,0.2)', animationDelay: '1s' }} />
                  <div className="absolute top-[35%] left-[70%] w-3 h-3 rounded-full bg-primary animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(0,105,72,0.2)', animationDelay: '0.3s' }} />
                  <div className="absolute top-[60%] left-[80%] w-2.5 h-2.5 rounded-full bg-error animate-pulse" style={{ boxShadow: '0 0 0 4px rgba(186,26,26,0.2)', animationDelay: '0.7s' }} />
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm p-3 rounded-lg border border-outline-variant shadow-sm">
                  <h4 className="font-label-md text-label-md font-semibold text-on-background mb-2">Status Operasional</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Optimal (&gt;90%)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-secondary-container" />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Peringatan (70-90%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Kritis (&lt;70%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts Panel */}
            <div className="bg-surface rounded-xl p-lg ambient-shadow flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title-lg text-title-lg font-semibold text-on-background">Peringatan Performa</h3>
                <span className="bg-error-container text-on-error-container font-label-md text-label-md px-2 py-0.5 rounded-full">3 Aktif</span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                {/* Alert 1 */}
                <div className="p-4 rounded-lg border border-error/20 bg-error-container/10">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error mt-0.5">warning</span>
                    <div>
                      <h4 className="font-label-md text-label-md font-semibold text-on-background">Limbah &gt; 10% di Jawa Barat</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Dapur Sentral #43 melaporkan lonjakan limbah bahan baku segar.
                      </p>
                      <button className="mt-2 text-primary font-label-md text-label-md hover:underline">Lihat Detail</button>
                    </div>
                  </div>
                </div>

                {/* Alert 2 */}
                <div className="p-4 rounded-lg border border-secondary-container/30 bg-secondary-container/5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">inventory_2</span>
                    <div>
                      <h4 className="font-label-md text-label-md font-semibold text-on-background">Stok Menipis: Sumatera Utara</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Prediksi AI: Kekurangan stok beras dalam 3 hari ke depan.
                      </p>
                      <button className="mt-2 text-primary font-label-md text-label-md hover:underline">Tinjau Logistik</button>
                    </div>
                  </div>
                </div>

                {/* Alert 3 */}
                <div className="p-4 rounded-lg border border-secondary-container/30 bg-secondary-container/5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">sync_problem</span>
                    <div>
                      <h4 className="font-label-md text-label-md font-semibold text-on-background">Sinkronisasi Token Gagal</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        2 wilayah mengalami keterlambatan update data token harian.
                      </p>
                      <button className="mt-2 text-primary font-label-md text-label-md hover:underline">Cek Sistem</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trends Graph */}
          <div className="bg-surface rounded-xl p-lg ambient-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-title-lg text-title-lg font-semibold text-on-background">
                Tren Distribusi vs Target Nutrisi
              </h3>
              <select className="bg-surface-container-low border border-outline-variant rounded-md font-body-sm text-body-sm py-1 pl-3 pr-8 focus:ring-2 focus:ring-primary">
                <option>30 Hari Terakhir</option>
                <option>Kuartal Ini</option>
              </select>
            </div>
            <div className="w-full h-64 rounded-lg bg-surface-container-lowest border border-outline-variant/50 overflow-hidden relative flex items-end px-4 pb-4 gap-2">
              {/* Simple bar chart visualization */}
              {[65, 72, 68, 80, 75, 82, 79, 88, 84, 90, 86, 92, 88, 94, 91, 95, 89, 96, 92, 97, 94, 96, 91, 93, 97, 95, 98, 94, 96, 99].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm transition-all hover:opacity-80"
                  style={{
                    height: `${h}%`,
                    background: i % 3 === 0
                      ? 'rgba(0,105,72,0.7)'
                      : i % 3 === 1
                        ? 'rgba(0,105,72,0.4)'
                        : 'rgba(254,166,25,0.5)',
                    minWidth: '6px'
                  }}
                />
              ))}
              {/* Overlay label */}
              <div className="absolute top-4 left-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-primary/70" />
                  <span className="text-xs text-on-surface-variant">Distribusi Aktual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-secondary-container/70" />
                  <span className="text-xs text-on-surface-variant">Target Nutrisi</span>
                </div>
              </div>
            </div>
          </div>

        </div>{/* end content */}
      </main>

      {/* ── Bottom Nav (Mobile Only) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface shadow-[0_-4px_15px_rgba(0,0,0,0.04)] rounded-t-xl">
        {[
          { icon: 'kitchen', label: 'Dapur' },
          { icon: 'qr_code_scanner', label: 'Token' },
          { icon: 'camera', label: 'Limbah' },
          { icon: 'query_stats', label: 'Nutrisi', active: true },
          { icon: 'person', label: 'Profil' },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex flex-col items-center justify-center ${item.active
              ? 'bg-primary-container text-on-primary-container rounded-xl px-4 py-1'
              : 'text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px] mt-1">{item.label}</span>
          </a>
        ))}
      </nav>

    </div>
  );
};

export default ExecutiveDashboard;
