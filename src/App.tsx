/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './views/Landing';
import { Onboarding } from './views/Onboarding';
import { Auth } from './views/Auth';
import { CustomCursor } from './components/CustomCursor';

// Layout and Views
import { Layout } from './components/layout/Layout';
import { DashboardView } from './views/Dashboard';
import { PortalApoioView } from './views/PortalApoio';
import { SegurancaDigitalView } from './views/SegurancaDigital';
import { CentralDireitosView } from './views/CentralDireitos';
import { IAEducativaView } from './views/IAEducativa';
import { PerfilView } from './views/Perfil';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
        
        {/* App Layout (SAAS) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/apoio" element={<PortalApoioView />} />
          <Route path="/seguranca-digital" element={<SegurancaDigitalView />} />
          <Route path="/direitos" element={<CentralDireitosView />} />
          <Route path="/ia-educativa" element={<IAEducativaView />} />
          <Route path="/perfil" element={<PerfilView />} />
        </Route>
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </>
  );
}
