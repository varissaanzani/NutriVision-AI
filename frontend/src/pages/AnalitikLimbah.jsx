import React, { useState } from 'react';
import logonut from '../assets/logonut.png';

export default function AnalitikLimbah() {
  const [scanMode, setScanMode] = useState('sebelum');
  const [imageBefore, setImageBefore] = useState(null);
  const [imageAfter, setImageAfter] = useState(null);
  const [fileBefore, setFileBefore] = useState(null);
  const [fileAfter, setFileAfter] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (scanMode === 'sebelum') {
        setImageBefore(url);
        setFileBefore(file);
      } else {
        setImageAfter(url);
        setFileAfter(file);
      }
      setResult(null); // Reset result when a new image is uploaded
    }
  };

  const handleAnalyze = async () => {
    if (!fileBefore || !fileAfter) {
      alert("Silakan unggah foto sebelum dan setelah makan terlebih dahulu.");
      return;
    }
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("image_before", fileBefore);
    formData.append("image_after", fileAfter);

    try {
      const res = await fetch("http://localhost:8000/analyze-waste", { method: "POST", body: formData });
      const data = await res.json();
      setResult(data);
      setScanMode('setelah'); // Switch to setelah mode to view results on the 'after' image
    } catch (err) {
      alert("Gagal menghubungi AI Engine. Pastikan backend aktif.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>

      {/* Page Content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="max-w-[64rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* ── LEFT: Scanner Viewport ── */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
                {/* Card Header */}
                <div className="p-5 border-b border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-on-surface">Pindai Nampan</h2>
                    <p className="text-xs text-on-surface-variant mt-0.5">Sejajarkan nampan di dalam area deteksi</p>
                  </div>
                  {/* Mode Toggle */}
                  <div className="bg-surface-container-low rounded-full p-1 flex border border-outline-variant/30">
                    <button
                      onClick={() => setScanMode('sebelum')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${scanMode === 'sebelum'
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                    >
                      Sebelum Makan
                    </button>
                    <button
                      onClick={() => setScanMode('setelah')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${scanMode === 'setelah'
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                    >
                      Setelah Makan
                    </button>
                  </div>
                </div>

                {/* Scanner Viewport */}
                <div className="relative overflow-hidden" style={{ height: '380px' }}>
                  {/* Background image */}
                  <img
                    src={
                      (scanMode === 'sebelum' ? imageBefore : imageAfter) ||
                      "https://images.unsplash.com/photo-1574513337910-53bc30e3f16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="Food tray"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                  {/* Scanning Frame */}
                  <div
                    className="absolute border-2 border-primary/60 rounded-2xl"
                    style={{ top: '15%', left: '20%', right: '20%', bottom: '20%' }}
                  >
                    {/* Corners */}
                    <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl"></div>
                    <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-[3px] border-r-[3px] border-primary rounded-tr-xl"></div>
                    <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-[3px] border-l-[3px] border-primary rounded-bl-xl"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-[3px] border-r-[3px] border-primary rounded-br-xl"></div>

                    {/* Detection labels */}
                    {isAnalyzing && (
                      <>
                        <div className="absolute top-[30%] left-[30%] bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg z-20">
                          <span className="material-symbols-outlined animate-spin text-white">progress_activity</span>
                          <span className="text-white text-sm font-bold">Menganalisis...</span>
                        </div>
                        {/* Scan line animation */}
                        <div
                          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(0,105,72,0.8)] z-10"
                          style={{ animation: 'scanLine 2.5s ease-in-out infinite' }}
                        ></div>
                      </>
                    )}
                    
                    {result && scanMode === 'setelah' && !isAnalyzing && (
                      <>
                        <div className="absolute top-[15%] left-[10%] bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></div>
                          <span className="text-white text-xs font-bold">{result.detected_components[0] || 'Nasi'}</span>
                        </div>
                        <div className="absolute bottom-[25%] right-[8%] bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                          <div className="w-2 h-2 rounded-full bg-[#FFB74D] animate-pulse shrink-0"></div>
                          <span className="text-white text-xs font-bold">{result.detected_components[1] || 'Protein'}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Flash button */}
                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>flash_off</span>
                  </button>
                </div>

                {/* Result Section */}
                <div className="p-5">
                  {result ? (
                    <div className="flex items-center justify-between p-4 rounded-xl bg-error-container/20 border border-error/20">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-error-container flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-error" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>eco</span>
                        </div>
                        <div>
                          <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Limbah Terdeteksi</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-2xl font-bold text-error">{result.waste_percentage}%</span>
                            <span className="text-xs text-on-surface-variant">dari total porsi</span>
                          </div>
                          <p className="text-xs text-on-surface-variant mt-1">Estimasi Kalori Terbuang: <span className="font-semibold text-on-surface">{result.calories_wasted} kkal</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => {setResult(null); setFileBefore(null); setFileAfter(null); setImageBefore(null); setImageAfter(null); setScanMode('sebelum');}} className="bg-surface border border-outline-variant/50 text-on-surface px-4 py-2 rounded-xl text-xs font-semibold hover:bg-surface-container-low transition-colors">
                          Ulangi
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <p className="text-sm text-on-surface-variant mb-3 text-center">
                        Mode <strong>{scanMode} makan</strong> aktif. {scanMode === 'sebelum' ? (!fileBefore ? 'Unggah foto sebelum makan.' : 'Foto sebelum makan tersimpan. Beralih ke "Setelah Makan" dan unggah foto sisa makanan.') : (!fileAfter ? 'Unggah foto sisa makanan.' : 'Kedua foto siap dianalisis.')}
                      </p>
                      
                      {fileBefore && fileAfter && (
                        <button onClick={handleAnalyze} disabled={isAnalyzing} className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-primary-container hover:text-primary transition-colors shadow-sm">
                          {isAnalyzing ? (
                            <><span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>refresh</span> Memproses AI...</>
                          ) : (
                            <><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>psychology</span> Mulai Analisis AI</>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Capture & Upload Controls */}
                  <div className="flex items-center justify-center gap-6 mt-5">
                    {/* Invisible spacer for perfect centering of main button */}
                    <div className="w-12 h-12"></div>

                    <button className="w-16 h-16 rounded-full border-4 border-primary/30 flex items-center justify-center hover:border-primary/60 transition-colors group relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full group-hover:scale-95 transition-transform shadow-md flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                      </div>
                    </button>

                    <label className="w-12 h-12 rounded-full bg-surface border border-outline-variant/50 hover:bg-surface-container-low flex items-center justify-center cursor-pointer transition-colors shadow-sm group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" style={{ fontSize: '20px' }}>photo_library</span>
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Stats & Logs ── */}
            <div className="lg:col-span-2 flex flex-col gap-4 min-w-0 w-full">
              {result ? (
                <>
                  {/* Today's Summary */}
                  <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-5 w-full">
                    <h3 className="text-sm font-bold text-on-surface mb-4">Hasil Analisis</h3>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-error-container/20 rounded-xl">
                        <p className="text-2xl font-bold text-error">{result.waste_percentage}%</p>
                        <p className="text-xs text-on-surface-variant mt-1 leading-tight">Total Limbah</p>
                      </div>
                      <div className="text-center p-3 bg-surface-container-lowest rounded-xl">
                        <p className="text-2xl font-bold text-on-surface">{result.calories_wasted}</p>
                        <p className="text-xs text-on-surface-variant mt-1 leading-tight">Kalori Terbuang (kkal)</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-on-surface-variant mb-1.5">
                        <span>Tingkat Makanan Terkonsumsi</span>
                        <span className="font-semibold text-primary">{100 - result.waste_percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${100 - result.waste_percentage}%` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Komponen Terdeteksi */}
                  <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-5 flex-1 w-full">
                    <h3 className="text-sm font-bold text-on-surface mb-4">Komponen Limbah Terdeteksi</h3>
                    <div className="space-y-4">
                      {result.detected_components && result.detected_components.length > 0 ? (
                        result.detected_components.map((label, idx) => {
                          const colors = ['bg-primary', 'bg-[#fea619]', 'bg-tertiary', 'bg-error'];
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${colors[idx % colors.length]}`}></div>
                              <span className="text-sm font-medium text-on-surface">{label}</span>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-sm text-on-surface-variant italic">Tidak ada komponen spesifik yang terdeteksi secara dominan.</p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-8 h-full min-h-[300px] w-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6 shrink-0">
                    <span className="material-symbols-outlined text-outline text-4xl">monitoring</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Panel Analisis Limbah</h3>
                  <p className="text-sm text-on-surface-variant w-full">
                    Detail hasil deteksi limbah, persentase komponen, dan estimasi kalori yang terbuang akan muncul di sini setelah Anda memproses foto melalui AI Engine.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* Keep styles that might be needed globally or locally */
const style = document.createElement('style');
style.textContent = `
  @keyframes scanLine {
    0%, 100% { top: 5%; opacity: 0; }
    10%, 90% { opacity: 1; }
    50% { top: 90%; }
  }
`;
document.head.appendChild(style);
