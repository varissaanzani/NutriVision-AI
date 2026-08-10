import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DasborEksekutif from './pages/DasborEksekutif';
import ManajemenDapur from './pages/ManajemenDapur';
import AnalitikLimbah from './pages/AnalitikLimbah';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Dasbor Eksekutif">
              <DasborEksekutif />
            </Layout>
          }
        />
        <Route
          path="/dapur"
          element={
            <Layout title="Manajemen Dapur">
              <ManajemenDapur />
            </Layout>
          }
        />
        <Route
          path="/limbah"
          element={
            <Layout title="Analitik Limbah">
              <AnalitikLimbah />
            </Layout>
          }
        />
        {/* Placeholder routes for future pages */}
        <Route path="/logistik" element={<Layout title="Logistik"><PlaceholderPage title="Logistik" icon="local_shipping" /></Layout>} />
        <Route path="/token" element={<Layout title="Token Digital"><PlaceholderPage title="Token Digital" icon="pin" /></Layout>} />
        <Route path="/pemasok" element={<Layout title="Intelijen Pemasok"><PlaceholderPage title="Intelijen Pemasok" icon="precision_manufacturing" /></Layout>} />
        <Route path="/nutrisi" element={<Layout title="Analitik Nutrisi"><PlaceholderPage title="Analitik Nutrisi" icon="monitoring" /></Layout>} />
        <Route path="/rekomendasi" element={<Layout title="Rekomendasi AI"><PlaceholderPage title="Rekomendasi AI" icon="psychology" /></Layout>} />
        <Route path="/portal" element={<Layout title="Portal Publik"><PlaceholderPage title="Portal Publik" icon="public" /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title, icon }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="w-20 h-20 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary-container">
        <span className="material-symbols-outlined text-[48px]">{icon}</span>
      </div>
      <div className="text-center">
        <h2 className="text-headline-md font-bold text-on-background mb-2">{title}</h2>
        <p className="text-body-md text-on-surface-variant">
          Halaman ini sedang dalam pengembangan.
        </p>
      </div>
    </div>
  );
}
