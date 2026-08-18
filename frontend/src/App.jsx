import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import KitchenManagement from './pages/KitchenManagement';
import TokenManagement from './pages/TokenManagement';
import AnalitikLimbah from './pages/AnalitikLimbah';
import SupplierIntelligence from './pages/SupplierIntelligence';
import NutritionAnalytics from './pages/NutritionAnalytics';
import PublicPortal from './pages/PublicPortal';
import DistributionInput from './pages/DistributionInput';
import RekomendasiAI from './pages/RekomendasiAI';
import LogistikDistribusi from './pages/LogistikDistribusi';
import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root ke /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Main App Pages */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<ExecutiveDashboard />} />
          <Route path="/kitchen" element={<KitchenManagement />} />
          <Route path="/token" element={<TokenManagement />} />
          <Route path="/scanner" element={<AnalitikLimbah />} />
          <Route path="/supplier" element={<SupplierIntelligence />} />
          <Route path="/nutrition" element={<NutritionAnalytics />} />
          <Route path="/public" element={<PublicPortal />} />
          <Route path="/distribution" element={<DistributionInput />} />
          <Route path="/rekomendasi" element={<RekomendasiAI />} />
          <Route path="/logistik" element={<LogistikDistribusi />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
