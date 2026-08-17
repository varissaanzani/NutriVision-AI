const MAP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3MNWK7WMb_F9YQLEfl3BQ8YPn59-Po_HV1pCD7CEzBRenLUmfd4DOETAbxlaaPR6mmL0BHXD0Wb9kn1n4MaF3FCNW7Vx2G8q9hobJP-_jUKDLAajTSyik8DWJSHpNuC5FRzVZ5d31-17SqEfsS1FznIWqfv28RmnQTKDJxk2GHxhYdy2huyGmkee_1Fvb_id42f2xJEbjS8uSDpBk5djWf4Q_QUtq5gn_g6L79qwEzhCV13T0XI4O';

const CHART_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJNGRbCwAzYDG5uwZXhtnaUYVymfIVAr14GGewMwZSG8xCm-Eg6LguKiLA-GU0_eipe1MCDyIrYZO-pzvnyTB1xfOErvye9QcaIT9GAsnajJOqsyrIt7WLu0AqYnYN-xXSHVjDGScL1G9XnUYTB79p8EOX-HT-6OBCJb9F-wcX56WtR58KDq54s4_ehySVyJ5zlh8-muB26WsjPvetHO7rb95MNMHEDQ83lqsj0y8awu1lyLc2k9';

const kpiCards = [
  {
    icon: 'restaurant',
    bgClass: 'bg-primary-container/20',
    iconClass: 'text-primary-container',
    badge: '+12.5%',
    badgeClass: 'text-primary bg-primary/10',
    label: 'Total Makanan Terdistribusi',
    value: '2.4M',
    sub: 'Bulan ini',
  },
  {
    icon: 'recycling',
    bgClass: 'bg-secondary-container/20',
    iconClass: 'text-secondary-container',
    badge: '-2.1%',
    badgeClass: 'text-secondary bg-secondary-container/20',
    label: 'Rata-rata % Limbah',
    value: '4.8%',
    sub: 'Target: < 5%',
  },
  {
    icon: 'storefront',
    bgClass: 'bg-tertiary-container/20',
    iconClass: 'text-tertiary',
    badge: '+45',
    badgeClass: 'text-primary bg-primary/10',
    label: 'Dapur Aktif',
    value: '1,204',
    sub: 'Nasional',
  },
];

const alerts = [
  {
    icon: 'warning',
    iconClass: 'text-error',
    borderClass: 'border-error/20 bg-error-container/10',
    title: 'Limbah > 10% di Jawa Barat',
    desc: 'Dapur Sentral #43 melaporkan lonjakan limbah bahan baku segar.',
    action: 'Lihat Detail',
  },
  {
    icon: 'inventory_2',
    iconClass: 'text-secondary',
    borderClass: 'border-secondary-container/30 bg-secondary-container/5',
    title: 'Stok Menipis: Sumatera Utara',
    desc: 'Prediksi AI: Kekurangan stok beras dalam 3 hari ke depan.',
    action: 'Tinjau Logistik',
  },
  {
    icon: 'sync_problem',
    iconClass: 'text-secondary',
    borderClass: 'border-secondary-container/30 bg-secondary-container/5',
    title: 'Sinkronisasi Token Gagal',
    desc: '2 wilayah mengalami keterlambatan update data token harian.',
    action: 'Cek Sistem',
  },
];

export default function DasborEksekutif() {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-xl">
        <div>
          <h2 className="text-headline-lg font-bold text-on-background">Tinjauan Nasional</h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Pemantauan real-time performa program BGN di seluruh wilayah.
          </p>
        </div>
        <div className="flex gap-3">
          <select className="bg-surface border-outline-variant border rounded-lg text-body-sm py-2 pl-4 pr-10 focus:ring-primary focus:border-primary">
            <option>Semua Wilayah</option>
            <option>Jawa</option>
            <option>Sumatera</option>
          </select>
          <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md hover:bg-primary-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>
            Laporan
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {kpiCards.map((card) => (
          <div
            key={card.label}
            className="bg-surface rounded-xl p-lg ambient-shadow hover-ambient-shadow transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-10 h-10 rounded-full ${card.bgClass} flex items-center justify-center ${card.iconClass}`}
              >
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <span className={`text-label-md ${card.badgeClass} px-2 py-1 rounded-full`}>
                {card.badge}
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-1">{card.label}</p>
            <h3 className="text-display-sm font-bold text-on-background">{card.value}</h3>
            <p className="text-label-md text-outline mt-2">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Map and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Map */}
        <div className="lg:col-span-2 bg-surface rounded-xl p-lg ambient-shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-semibold text-on-background">
              Peta Distribusi Nasional
            </h3>
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
            <img
              src={MAP_IMG}
              alt="Map of Indonesia"
              className="w-full h-full object-cover"
            />
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm p-3 rounded-lg border border-outline-variant shadow-sm">
              <h4 className="text-label-md font-semibold text-on-background mb-2">
                Status Operasional
              </h4>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-body-sm text-on-surface-variant">Optimal (&gt;90%)</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="text-body-sm text-on-surface-variant">Peringatan (70-90%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error" />
                <span className="text-body-sm text-on-surface-variant">Kritis (&lt;70%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-surface rounded-xl p-lg ambient-shadow flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-semibold text-on-background">
              Peringatan Performa
            </h3>
            <span className="bg-error-container text-on-error-container text-label-md px-2 py-0.5 rounded-full">
              3 Aktif
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
            {alerts.map((alert) => (
              <div key={alert.title} className={`p-4 rounded-lg border ${alert.borderClass}`}>
                <div className="flex items-start gap-3">
                  <span className={`material-symbols-outlined ${alert.iconClass} mt-0.5`}>
                    {alert.icon}
                  </span>
                  <div>
                    <h4 className="text-label-md font-semibold text-on-background">
                      {alert.title}
                    </h4>
                    <p className="text-body-sm text-on-surface-variant mt-1">{alert.desc}</p>
                    <button className="mt-2 text-primary text-label-md hover:underline">
                      {alert.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trends Graph */}
      <div className="bg-surface rounded-xl p-lg ambient-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-title-lg font-semibold text-on-background">
            Tren Distribusi vs Target Nutrisi
          </h3>
          <select className="bg-surface-container-low border-outline-variant border rounded-md text-body-sm py-1 pl-3 pr-8">
            <option>30 Hari Terakhir</option>
            <option>Kuartal Ini</option>
          </select>
        </div>
        <div className="w-full h-64 rounded-lg bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${CHART_BG}')` }}
          />
          <p className="text-body-sm text-on-surface-variant relative z-10 bg-surface/80 px-4 py-2 rounded-full backdrop-blur-sm">
            Area Grafik Interaktif
          </p>
        </div>
      </div>
    </>
  );
}
