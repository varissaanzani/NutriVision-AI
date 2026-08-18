import React, { useState } from 'react';

const DistributionInput = () => {
  const [imageBefore, setImageBefore] = useState(null);
  const [imageAfter, setImageAfter] = useState(null);
  const [fileBefore, setFileBefore] = useState(null);
  const [fileAfter, setFileAfter] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'before') { setImageBefore(url); setFileBefore(file); }
      else { setImageAfter(url); setFileAfter(file); }
    }
  };

  const handleAnalyze = async () => {
    if (!fileBefore || !fileAfter) return alert("Pilih dua gambar terlebih dahulu!");
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("image_before", fileBefore);
    formData.append("image_after", fileAfter);

    try {
      const res = await fetch("http://localhost:8000/analyze-waste", { method: "POST", body: formData });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("AI Engine belum aktif atau gagal dihubungi.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-[32rem] mx-auto space-y-6">
        {/* Detail Distribusi */}
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30">
          <h2 className="font-title-lg text-title-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">local_shipping</span> Info Pengiriman
          </h2>
          <div className="space-y-3">
            <div>
              <p className="font-label-md text-label-md text-outline">Menu Hari Ini</p>
              <p className="font-body-md text-body-md text-on-surface font-medium">Nasi Tim Ayam Jamur</p>
            </div>
            <div>
              <p className="font-label-md text-label-md text-outline">ID Pengiriman / Token</p>
              <div className="flex gap-2 mt-1">
                <input type="text" value="TRX-992-81A" readOnly className="bg-surface-container-low border-outline-variant border rounded-lg px-3 py-2 font-code-md text-sm w-full" />
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md">Verifikasi</button>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Gambar Sebelum */}
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30">
          <h2 className="font-title-lg text-title-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">camera_alt</span> Foto Sebelum Makan
          </h2>
          <p className="font-body-sm text-on-surface-variant mb-4">Pastikan nampan terlihat jelas dan sejajar di dalam bingkai.</p>

          <div className="relative w-full h-48 bg-surface-container-low rounded-xl border-2 border-dashed border-outline flex flex-col items-center justify-center overflow-hidden">
            {imageBefore ? (
              <img src={imageBefore} alt="Before" className="w-full h-full object-cover" />
            ) : (
              <>
                <span className="material-symbols-outlined text-4xl text-outline mb-2">add_a_photo</span>
                <span className="font-label-md text-outline">Ambil Foto</span>
              </>
            )}
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'before')} className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
        </div>

        {/* Upload Gambar Sesudah */}
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30">
          <h2 className="font-title-lg text-title-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">delete_sweep</span> Foto Sesudah Makan
          </h2>

          <div className="relative w-full h-48 bg-surface-container-low rounded-xl border-2 border-dashed border-outline flex flex-col items-center justify-center overflow-hidden">
            {imageAfter ? (
              <img src={imageAfter} alt="After" className="w-full h-full object-cover" />
            ) : (
              <>
                <span className="material-symbols-outlined text-4xl text-outline mb-2">add_a_photo</span>
                <span className="font-label-md text-outline">Ambil Foto</span>
              </>
            )}
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'after')} className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
        </div>

        <button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-lg text-title-lg font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md">
          {isAnalyzing ? "Memproses AI..." : "Proses Analisis AI"}
        </button>

        {result && (
          <div className="bg-primary/10 p-6 rounded-2xl shadow-sm border border-primary/30 mt-6">
            <h3 className="font-title-lg text-primary font-bold">Hasil Analisis</h3>
            <p><strong>Limbah Terdeteksi:</strong> {result.waste_percentage}%</p>
            <p><strong>Komponen:</strong> {result.detected_components?.join(', ')}</p>
            <p><strong>Estimasi Kalori Terbuang:</strong> {result.calories_wasted} kkal</p>
          </div>
        )}
    </div>
  );
};

export default DistributionInput;
