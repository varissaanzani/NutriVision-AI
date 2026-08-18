import React from 'react';

const PublicPortal = () => {
  return (
    <>
      <div className="p-lg">
          {/* Hero Section */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg border border-outline-variant/20 flex items-center p-12">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
               <div className="w-full h-full bg-gradient-to-r from-surface-container-lowest to-transparent absolute inset-0 z-10"></div>
               <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80" alt="Healthy eating" className="w-full h-full object-cover opacity-70" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-[36rem]">
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
    </>
  );
};

export default PublicPortal;
