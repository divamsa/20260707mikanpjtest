
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isTopPage = location.pathname === '/';
  const isWorksPage = location.pathname === '/works';
  const isStaffPage = location.pathname === '/staff';
  const isCompanyPage = location.pathname === '/company';
  
  const logoImage = "https://res.cloudinary.com/dbyxjlzmt/image/upload/v1768288553/20260112newlogo_um3gcm.png";

  const navItems = [
    { path: '/', label: 'Top' },
    { path: '/works', label: 'Works' },
    { path: '/staff', label: 'Staff' },
    { path: '/company', label: 'Company' },
  ];

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // メニュー展開時にスクロールをロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 全ての主要ページで左上ロゴを表示しない
  const shouldShowLogo = !isTopPage && !isWorksPage && !isStaffPage && !isCompanyPage;

  return (
    <>
      {/* Global Fixed Logo - Shown only if not on the main pages */}
      {shouldShowLogo && (
        <div className="fixed top-8 left-6 sm:left-10 z-[60] pointer-events-auto animate-fade-in">
          <Link to="/" className="block hover:opacity-70 transition-opacity">
            <img 
              src={logoImage} 
              alt="みかんプロジェクト" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
        </div>
      )}

      {/* Desktop Navigation (Visible on lg and above) */}
      <nav className="fixed top-10 right-6 sm:right-10 z-50 hidden lg:flex flex-col items-end space-y-4 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 no-underline font-maru
                ${isActive 
                  ? 'text-black border-b-2 border-black pb-0.5' 
                  : 'text-gray-400 hover:text-orange-500'
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button (Visible below lg) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-6 z-[70] lg:hidden w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-orange-100 focus:outline-none"
        aria-label="メニューを開く"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-full' : ''}`}></span>
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[65] lg:hidden transition-all duration-500 flex flex-col items-center justify-center
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#fffaf0]/95 backdrop-blur-md"></div>
        
        {/* Menu Items */}
        <nav className="relative z-10 flex flex-col items-center space-y-10">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl font-bold tracking-[0.2em] font-maru transition-all duration-300 transform
                  ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  ${isActive ? 'text-black border-b-2 border-black px-2' : 'text-gray-500 hover:text-orange-500'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mikan Decoration in Menu */}
        <div className={`mt-16 relative z-10 transition-all duration-700 delay-500 ${isOpen ? 'opacity-40 scale-100' : 'opacity-0 scale-50'}`}>
           <svg viewBox="0 0 100 100" className="w-16 h-16 fill-orange-400">
             <circle cx="50" cy="50" r="45" />
             <path d="M50 5 L50 20 M82 18 L72 28 M95 50 L80 50 M82 82 L72 72 M50 95 L50 80 M18 82 L28 72 M5 50 L20 50 M18 18 L28 28" stroke="white" strokeWidth="4" />
           </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
