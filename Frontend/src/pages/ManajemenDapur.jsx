const steps = [
  { icon: 'inventory', label: 'Persiapan', done: true },
  { icon: 'soup_kitchen', label: 'Memasak', done: true },
  { icon: 'room_service', label: 'Porsi', done: false, active: true },
  { icon: 'local_shipping', label: 'Dikirim', done: false },
];

const inventoryItems = [
  { name: 'Beras Premium', qty: '120 kg', pct: 75, note: 'Cukup untuk 3 hari', warning: false },
  { name: 'Daging Ayam', qty: '15 kg', pct: 25, note: 'Stok kritis', warning: true },
  { name: 'Jamur Merang', qty: '8 kg', pct: 60, note: null, warning: false },
  { name: 'Bawang Putih', qty: '5 kg', pct: 85, note: null, warning: false },
];

export default function ManajemenDapur() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column */}
      <section className="lg:col-span-8 flex flex-col gap-md">
        {/* Status Stepper */}
        <div className="bg-surface-container-lowest rounded-xl p-lg ambient-shadow border border-outline-variant/20">
          <div className="flex justify-between items-center mb-lg">
            <h3 className="text-title-lg text-on-surface">Status Batch Harian</h3>
            <span className="bg-primary-container text-on-primary-container px-sm py-1 rounded-full text-label-md">
              Batch #A492
            </span>
          </div>

          {/* Stepper */}
          <div className="relative flex items-center justify-between mt-xl mb-md">
            {/* Progress Line BG */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-surface-variant z-0" />
            {/* Progress Line Active */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[66%] h-[2px] bg-primary z-0 transition-all duration-500" />

            {steps.map((step) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center gap-sm">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 border-surface-container-lowest ${
                    step.done
                      ? 'bg-primary text-on-primary'
                      : step.active
                        ? 'bg-surface-container-lowest text-primary border-primary'
                        : 'bg-surface-container-lowest text-on-surface-variant border-surface-variant'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={step.done ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {step.icon}
                  </span>
                </div>
                <span
                  className={`text-label-md ${
                    step.active ? 'text-primary font-bold' : 'text-on-surface'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-body-sm text-on-surface-variant mt-lg">
            Estimasi selesai porsi: 10:45 AM
          </p>
        </div>

        {/* Menu & Nutrition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Menu Card */}
          <div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow border border-outline-variant/20 flex flex-col justify-center items-start">
            <h4 className="text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
              Menu Utama
            </h4>
            <p className="text-title-lg text-on-surface mb-xs">Nasi Tim Ayam Jamur</p>
            <p className="text-body-sm text-on-surface-variant mb-md">
              450 Porsi • SPPG Menu Standar
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded text-label-md">
                Tinggi Protein
              </span>
              <span className="px-2 py-1 bg-tertiary-container/20 text-tertiary rounded text-label-md">
                Rendah Lemak
              </span>
            </div>
          </div>

          {/* Nutrition Card */}
          <div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow border border-outline-variant/20">
            <h4 className="text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
              Nutrisi per Porsi
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Kalori', value: '320 kcal' },
                { label: 'Protein', value: '24g' },
                { label: 'Karbohidrat', value: '45g' },
              ].map((item, idx, arr) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center ${
                    idx < arr.length - 1 ? 'border-b border-outline-variant/20 pb-2' : ''
                  }`}
                >
                  <span className="text-body-sm text-on-surface">{item.label}</span>
                  <span className="text-body-sm font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Right Column — Inventory */}
      <section className="lg:col-span-4 flex flex-col">
        <div className="bg-surface-container-lowest rounded-xl p-lg ambient-shadow border border-outline-variant/20 h-full">
          <div className="flex justify-between items-center mb-lg">
            <h3 className="text-title-lg text-on-surface">Inventaris Bahan</h3>
            <button className="text-primary hover:bg-primary/10 p-sm rounded-full transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">more_horiz</span>
            </button>
          </div>

          <div className="space-y-xl">
            {inventoryItems.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-baseline mb-xs">
                  <span className="text-body-md text-on-surface font-medium">{item.name}</span>
                  <span className="text-code-md text-on-surface-variant">{item.qty}</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${item.warning ? 'bg-secondary-container' : 'bg-primary'}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                {item.note && (
                  <p
                    className={`text-label-md mt-1 text-right flex justify-end items-center gap-1 ${
                      item.warning ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.warning && (
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                    )}
                    {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button className="w-full mt-xl bg-primary text-on-primary text-label-md py-sm rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
            Buat Permintaan Logistik
          </button>
        </div>
      </section>
    </div>
  );
}
