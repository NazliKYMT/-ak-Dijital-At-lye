import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { UserIcon } from './icons/UserIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-light-text shadow-md sticky top-0 z-50">
      <div className="h-8 bg-accent"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-4">
            <img src="/img/caku-logo.png" alt="Çankırı Karatekin Üniversitesi Logo" className="w-10 h-10" />
            <div className="hidden sm:flex items-center gap-4">
              <span className="font-bold text-4xl tracking-wider">ÇAKÜ</span>
              <div className="w-px h-10 bg-white/40" />
              <div className="leading-tight">
                <div className="text-sm font-medium tracking-[0.29em]">KARATEKİN</div>
                <div className="text-sm font-medium tracking-wider">ÜNİVERSİTESİ</div>
              </div>
            </div>
          </a>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Ara">
                <SearchIcon className="w-5 h-5"/>
            </button>
            <a href="#" className="hidden sm:inline-flex items-center bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors">
                Soru&Cevap
            </a>
            <button className="bg-accent p-2 rounded-full hover:bg-accent/90 transition-colors" aria-label="Kullanıcı Profili">
                <UserIcon className="w-6 h-6 text-white"/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;