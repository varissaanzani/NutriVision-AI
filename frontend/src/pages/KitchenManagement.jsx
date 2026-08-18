import React from 'react';
import logonut from '../assets/logonut.png';

const KitchenManagement = () => {
  return (
    <>
        <header className="flex justify-between items-center mb-8">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">Manajemen Dapur</h2>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-4 py-2 rounded-xl flex items-center gap-2 border border-outline-variant">
              <span className="material-symbols-outlined text-outline">search</span>
              <input type="text" placeholder="Cari batch, bahan..." className="bg-transparent outline-none font-body-sm" />
            </div>
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">A</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Form Input Dapur */}
            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30">
              <h3 className="font-title-lg text-title-lg font-semibold text-on-background mb-4">Form Input Dapur</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-sm text-on-surface-variant mb-1">ID Batch</label>
                    <input type="text" defaultValue="BATCH-A492" readOnly className="w-full bg-surface-container-highest border border-outline-variant rounded-lg px-3 py-2 text-sm focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-label-md text-sm text-on-surface-variant mb-1">Pilih Menu</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                      <option>Nasi Tim Ayam Jamur</option>
                      <option>Bubur Kacang Hijau</option>
                      <option>Nasi Goreng Sayur</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-sm text-on-surface-variant mb-1">Jumlah Porsi</label>
                    <input type="number" defaultValue="450" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-label-md text-sm text-on-surface-variant mb-1">Estimasi Selesai</label>
                    <input type="time" defaultValue="10:45" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary py-2 rounded-lg font-label-md hover:bg-primary-container transition-colors flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-sm">add_task</span> Mulai Proses Memasak
                </button>
              </form>
            </div>
            
            {/* Status Batch Harian */}
            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-title-lg text-title-lg font-semibold text-on-background">Status Batch Harian</h3>
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-semibold">Batch #A492</span>
              </div>
              
              <div className="flex justify-between items-center relative mb-8 px-4">
                <div className="absolute left-8 right-8 top-1/2 h-1 bg-surface-container-highest -translate-y-1/2 z-0"></div>
                <div className="absolute left-8 right-1/2 top-1/2 h-1 bg-primary -translate-y-1/2 z-0"></div>
                
                {['Persiapan', 'Memasak', 'Porsi', 'Dikirim'].map((step, i) => (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i < 2 ? 'bg-primary text-on-primary' : i === 2 ? 'bg-primary-container text-primary border-2 border-primary' : 'bg-surface-container-high text-outline'}`}>
                      <span className="material-symbols-outlined text-sm">
                        {i === 0 ? 'assignment' : i === 1 ? 'skillet' : i === 2 ? 'room_service' : 'local_shipping'}
                      </span>
                    </div>
                    <span className="font-label-md text-xs font-semibold">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-on-surface-variant mb-6">Estimasi selesai porsi: 10:45 AM</p>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
                <h4 className="font-label-md text-xs text-outline uppercase tracking-wider mb-2">MENU UTAMA</h4>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-on-background mb-1">Nasi Tim Ayam Jamur</h3>
                    <p className="text-sm text-on-surface-variant">450 Porsi • SPPG Menu Standar</p>
                    <div className="flex gap-2 mt-3">
                      <span className="bg-secondary-container/20 text-secondary px-2 py-1 rounded text-xs font-medium">Tinggi Protein</span>
                      <span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-xs font-medium">Rendah Lemak</span>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <h4 className="font-label-md text-xs text-outline uppercase tracking-wider mb-2">NUTRISI PER PORSI</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm"><span>Kalori</span><span className="font-semibold text-primary">320 kcal</span></div>
                      <div className="flex justify-between text-sm"><span>Protein</span><span className="font-semibold">24g</span></div>
                      <div className="flex justify-between text-sm"><span>Karbohidrat</span><span className="font-semibold">45g</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 ambient-shadow border border-outline-variant/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title-lg text-title-lg font-semibold text-on-background">Inventaris Bahan</h3>
                <span className="material-symbols-outlined text-outline cursor-pointer">more_horiz</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Beras Premium</span>
                    <span className="text-outline">120 kg</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                  <p className="text-[10px] text-outline text-right mt-1">Cukup untuk 3 hari</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Daging Ayam</span>
                    <span className="text-outline">15 kg</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-error w-[15%]"></div>
                  </div>
                  <p className="text-[10px] text-error font-semibold text-right mt-1">⚠️ Stok kritis</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Jamur Merang</span>
                    <span className="text-outline">8 kg</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[40%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Bawang Putih</span>
                    <span className="text-outline">5 kg</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-primary text-on-primary py-2 rounded-lg font-label-md hover:bg-primary-container transition-colors">
                Buat Permintaan Logistik
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default KitchenManagement;
