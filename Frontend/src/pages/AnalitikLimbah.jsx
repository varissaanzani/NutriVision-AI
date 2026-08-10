const wasteCategories = [
  { name: 'Bahan Baku Segar', pct: 42, color: 'bg-error', trend: '+5.2%', trendUp: true },
  { name: 'Makanan Matang', pct: 28, color: 'bg-secondary-container', trend: '-1.8%', trendUp: false },
  { name: 'Kemasan', pct: 18, color: 'bg-tertiary', trend: '+0.3%', trendUp: true },
  { name: 'Lainnya', pct: 12, color: 'bg-outline', trend: '-0.5%', trendUp: false },
];

const recentLogs = [
  {
    kitchen: 'Dapur Sentral #43',
    location: 'Jawa Barat',
    waste: '12.4%',
    status: 'kritis',
    time: '2 jam lalu',
  },
  {
    kitchen: 'Dapur Sentral #12',
    location: 'DKI Jakarta',
    waste: '3.2%',
    status: 'optimal',
    time: '3 jam lalu',
  },
  {
    kitchen: 'Dapur Sentral #28',
    location: 'Jawa Tengah',
    waste: '7.8%',
    status: 'peringatan',
    time: '4 jam lalu',
  },
  {
    kitchen: 'Dapur Sentral #55',
    location: 'Sumatera Utara',
    waste: '9.1%',
    status: 'peringatan',
    time: '5 jam lalu',
  },
  {
    kitchen: 'Dapur Sentral #07',
    location: 'Bali',
    waste: '2.1%',
    status: 'optimal',
    time: '6 jam lalu',
  },
];

const statusConfig = {
  kritis: { bg: 'bg-error-container', text: 'text-on-error-container', label: 'Kritis' },
  peringatan: { bg: 'bg-secondary-container/20', text: 'text-secondary', label: 'Peringatan' },
  optimal: { bg: 'bg-primary/10', text: 'text-primary', label: 'Optimal' },
};

const kpiCards = [
  {
    icon: 'delete_sweep',
    label: 'Total Limbah Bulan Ini',
    value: '18.2 ton',
    change: '-3.4%',
    positive: true,
    sub: 'vs bulan lalu',
  },
  {
    icon: 'savings',
    label: 'Potensi Penghematan',
    value: 'Rp 245M',
    change: '+12%',
    positive: true,
    sub: 'jika target tercapai',
  },
  {
    icon: 'eco',
    label: 'Skor Keberlanjutan',
    value: '82/100',
    change: '+4 poin',
    positive: true,
    sub: 'Rating A',
  },
];

export default function AnalitikLimbah() {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-xl">
        <div>
          <h2 className="text-headline-lg font-bold text-on-background">Analitik Limbah</h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Pemantauan dan analisis limbah makanan untuk efisiensi operasional.
          </p>
        </div>
        <div className="flex gap-3">
          <select className="bg-surface border-outline-variant border rounded-lg text-body-sm py-2 pl-4 pr-10 focus:ring-primary focus:border-primary">
            <option>30 Hari Terakhir</option>
            <option>Kuartal Ini</option>
            <option>Tahun Ini</option>
          </select>
          <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md hover:bg-primary-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>
            Ekspor
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
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <span
                className={`text-label-md px-2 py-1 rounded-full ${
                  card.positive ? 'text-primary bg-primary/10' : 'text-error bg-error-container'
                }`}
              >
                {card.change}
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-1">{card.label}</p>
            <h3 className="text-display-sm font-bold text-on-background">{card.value}</h3>
            <p className="text-label-md text-outline mt-2">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Category Breakdown + Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Waste Categories */}
        <div className="bg-surface rounded-xl p-lg ambient-shadow">
          <h3 className="text-title-lg font-semibold text-on-background mb-6">
            Kategori Limbah
          </h3>
          <div className="space-y-5">
            {wasteCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-body-sm text-on-surface font-medium">{cat.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-label-md text-on-surface-variant">{cat.pct}%</span>
                    <span
                      className={`text-label-md ${
                        cat.trendUp ? 'text-error' : 'text-primary'
                      }`}
                    >
                      {cat.trend}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2.5">
                  <div
                    className={`${cat.color} h-2.5 rounded-full transition-all duration-500`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Total */}
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
            <span className="text-body-md text-on-surface font-semibold">Total</span>
            <span className="text-body-md text-on-surface font-bold">100%</span>
          </div>
        </div>

        {/* Recent Logs Table */}
        <div className="lg:col-span-2 bg-surface rounded-xl p-lg ambient-shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-title-lg font-semibold text-on-background">
              Log Limbah Terbaru
            </h3>
            <button className="text-primary text-label-md hover:underline">Lihat Semua</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left text-label-md text-on-surface-variant font-medium pb-3 pr-4">
                    Dapur
                  </th>
                  <th className="text-left text-label-md text-on-surface-variant font-medium pb-3 pr-4">
                    Lokasi
                  </th>
                  <th className="text-left text-label-md text-on-surface-variant font-medium pb-3 pr-4">
                    % Limbah
                  </th>
                  <th className="text-left text-label-md text-on-surface-variant font-medium pb-3 pr-4">
                    Status
                  </th>
                  <th className="text-right text-label-md text-on-surface-variant font-medium pb-3">
                    Waktu
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log) => {
                  const cfg = statusConfig[log.status];
                  return (
                    <tr
                      key={log.kitchen}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-3 pr-4 text-body-sm text-on-surface font-medium">
                        {log.kitchen}
                      </td>
                      <td className="py-3 pr-4 text-body-sm text-on-surface-variant">
                        {log.location}
                      </td>
                      <td className="py-3 pr-4 text-code-md text-on-surface font-semibold">
                        {log.waste}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`${cfg.bg} ${cfg.text} text-label-md px-2 py-0.5 rounded-full`}
                        >
                          {cfg.label}
                        </span>
                      </td>
                      <td className="py-3 text-right text-body-sm text-on-surface-variant">
                        {log.time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-surface rounded-xl p-lg ambient-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              psychology
            </span>
          </div>
          <div>
            <h3 className="text-title-lg font-semibold text-on-background">
              Rekomendasi AI
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Saran otomatis berdasarkan pola limbah terkini
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              icon: 'trending_down',
              title: 'Kurangi Porsi Sayur 10%',
              desc: 'Data menunjukkan 34% sisa sayur tidak dikonsumsi di 12 dapur Jawa Barat.',
              action: 'Terapkan',
            },
            {
              icon: 'schedule',
              title: 'Geser Jadwal Distribusi',
              desc: 'Pengiriman pukul 06:00 memiliki limbah 40% lebih rendah dari pukul 08:00.',
              action: 'Simulasi',
            },
            {
              icon: 'swap_horiz',
              title: 'Ganti Pemasok Daging',
              desc: 'Pemasok alternatif memiliki tingkat kerusakan 60% lebih rendah.',
              action: 'Bandingkan',
            },
          ].map((rec) => (
            <div
              key={rec.title}
              className="p-4 rounded-lg border border-outline-variant/20 bg-surface-container-lowest hover:shadow-md transition-shadow"
            >
              <span className="material-symbols-outlined text-primary mb-3 block">
                {rec.icon}
              </span>
              <h4 className="text-body-md font-semibold text-on-surface mb-2">{rec.title}</h4>
              <p className="text-body-sm text-on-surface-variant mb-3">{rec.desc}</p>
              <button className="text-primary text-label-md font-semibold hover:underline">
                {rec.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
