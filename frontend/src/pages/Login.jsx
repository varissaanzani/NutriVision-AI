import React, { useState } from 'react';
import logonut from '../assets/logonut.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-surface rounded-2xl p-8 max-w-[28rem] w-full ambient-shadow">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-64 h-32 flex items-center justify-center bg-transparent mb-4">
            <img src={logonut} alt="NutriVision" className="w-full h-full object-contain scale-110" />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-2">
            Masuk ke sistem pemantauan Program Makan Bergizi Gratis
          </p>
        </div>

        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div>
            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
              Email / ID Pengguna
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
            />
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
              Kata Sandi
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input id="remember-me" type="checkbox" className="rounded text-primary focus:ring-primary border-outline-variant" />
              <span className="font-body-sm text-body-sm text-on-surface-variant">Ingat saya</span>
            </label>
            <a href="#" className="font-label-md text-label-md text-primary hover:underline">
              Lupa kata sandi?
            </a>
          </div>
          <a
            id="login-button"
            href="/dashboard"
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md flex justify-center items-center gap-2"
          >
            Masuk
            <span className="material-symbols-outlined text-sm">login</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
