import React, { useState } from 'react';
import logonut from '../assets/logonut.png';

const RekomendasiAI = () => {
  const [applied, setApplied] = useState(false);

  return (
    <>
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-xl">
            <div>
              <h2 className="font-display-sm text-display-sm font-bold text-on-surface">Policy Optimizer</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-[42rem]">Mesin rekomendasi cerdas menganalisis pola konsumsi, data limbah historis, dan ketersediaan pasokan untuk memberikan saran operasional yang dapat ditindaklanjuti guna meningkatkan efisiensi dan nilai gizi.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container flex items-center gap-2 font-label-md text-label-md">
                <span className="material-symbols-outlined">filter_list</span>Filter
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-on-primary flex items-center gap-2 font-label-md text-label-md hover:opacity-90 shadow-sm">
                <span className="material-symbols-outlined">refresh</span>Perbarui Analisis
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Recommendation Card */}
            <div className="col-span-1 md:col-span-8 bg-surface rounded-xl p-6 shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(25,28,30,0.06)] transition-all relative overflow-hidden border border-surface-variant flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                      <span className="material-symbols-outlined text-2xl">trending_down</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/10 text-secondary font-label-md text-xs mb-1 font-semibold uppercase tracking-wider">Prioritas Tinggi</span>
                      <h3 className="font-title-lg text-title-lg text-on-surface">Optimasi Menu Mingguan</h3>
                    </div>
                  </div>
                  <span className="font-code-md text-on-surface-variant text-sm">ID: OPT-892</span>
                </div>
                <div className="flex-grow flex items-center">
                  <p className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                    Ganti <span className="text-error font-bold border-b-2 border-error border-dashed">Bayam</span> dengan{' '}
                    <span className="text-primary font-bold border-b-2 border-primary border-dashed">Brokoli</span> pada hari{' '}
                    <span className="font-bold">Kamis</span> untuk mengurangi proyeksi limbah sebesar{' '}
                    <span className="text-primary font-bold text-display-sm">12%</span>.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-surface-container pt-4">
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Dampak Biaya</span>
                      <span className="font-body-lg text-body-lg text-primary font-semibold">-Rp 1.2M/bulan</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Retensi Nutrisi</span>
                      <span className="font-body-lg text-body-lg text-on-surface font-semibold">+4% Serat</span>
                    </div>
                  </div>
                  <button onClick={() => setApplied(!applied)}
                    className={`px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 transition-colors ${applied ? 'bg-primary-container text-primary' : 'bg-primary text-on-primary hover:bg-primary-container'}`}>
                    {applied ? '? Diterapkan' : <>Terapkan Kebijakan <span className="material-symbols-outlined text-sm">arrow_forward</span></>}
                  </button>
                </div>
              </div>
            </div>

            {/* Context Panel */}
            <div className="col-span-1 md:col-span-4 bg-surface rounded-xl p-6 shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] border border-surface-variant flex flex-col">
              <h3 className="font-title-lg text-title-lg text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">analytics</span>Konteks Analisis
              </h3>
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">Tingkat Kebusukan Bayam (Kamis)</span>
                    <span className="font-code-md font-bold text-error">28%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="h-full bg-error rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">Daya Tahan Brokoli</span>
                    <span className="font-code-md font-bold text-primary">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-tertiary/5 border border-tertiary/10">
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <span className="font-semibold text-on-surface">Insight AI: </span>
                    Lonjakan kelembaban harian pada hari Rabu secara historis memicu kerusakan cepat pada sayuran berdaun hijau di area penyimpanan C.
                  </p>
                </div>
              </div>
            </div>

            {/* Logistik Card */}
            <div className="col-span-1 md:col-span-4 bg-surface rounded-xl p-5 shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(25,28,30,0.06)] transition-all border border-surface-variant">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">inventory_2</span></div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-xs">Logistik</span>
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Penyelarasan Pengiriman</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Maju jadwal pengiriman protein hewani 2 jam untuk menghindari suhu puncak. Potensi penghematan energi pendingin <span className="font-semibold text-on-surface">8%</span>.</p>
              <button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">Lihat Detail <span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>

            {/* Porsi Card */}
            <div className="col-span-1 md:col-span-4 bg-surface rounded-xl p-5 shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(25,28,30,0.06)] transition-all border border-surface-variant">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary"><span className="material-symbols-outlined">group</span></div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-xs">Porsi</span>
              </div>
              <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Penyesuaian Kalori</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Kurangi porsi karbohidrat sebesar 15g pada shift malam berdasarkan data aktivitas rendah. Tingkatkan protein nabati sebagai substitusi.</p>
              <button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">Tinjau Proporsi <span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>

            {/* Simulasi Card */}
            <div className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-xl p-5 shadow-[0_15px_15px_-5px_rgba(25,28,30,0.04)] border border-dashed border-outline-variant flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-3"><span className="material-symbols-outlined">add_circle</span></div>
              <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Simulasi Skenario</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 max-w-[200px]">Jalankan model AI dengan parameter kustom.</p>
              <button className="px-4 py-2 rounded-lg border border-outline text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md">Buat Skenario Baru</button>
            </div>
          </div>
    </>
  );
};

export default RekomendasiAI;
