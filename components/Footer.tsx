import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center text-subtle-text">
        <a href="#" className="flex items-center gap-4 mb-4">
            <img src="/img/caku-logo.png" alt="Çankırı Karatekin Üniversitesi Logo" className="w-10 h-10" />
            <div className="flex items-center gap-4">
              <span className="font-bold text-2xl tracking-wider text-primary">ÇAKÜ</span>
              <div className="w-px h-10 bg-gray-300" />
              <div className="leading-tight text-left">
                <div className="text-xs font-medium tracking-[0.29em] text-primary">KARATEKİN</div>
                <div className="text-xs font-medium tracking-wider text-primary">ÜNİVERSİTESİ</div>
              </div>
            </div>
        </a>
        <p className="text-sm">&copy; {currentYear} Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;