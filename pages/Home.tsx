import React from 'react';

const Home: React.FC = () => {
  // 元のロゴ画像URL
  const logoImage = "https://res.cloudinary.com/dbyxjlzmt/image/upload/v1768714736/20260118Toppagemikanskelton_xyeq6v.png";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 overflow-hidden" style={{ backgroundColor: '#fffaf0' }}>
      
      {/* Decorative Blur Element - Shifted slightly to the right from the left edge */}
      <div 
        className="absolute -top-[5%] left-[2%] w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] max-w-[280px] max-h-[280px] pointer-events-none z-0 opacity-70 mix-blend-multiply animate-soft-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255, 131, 0, 1) 0%, rgba(255, 165, 30, 0.6) 45%, rgba(255, 200, 100, 0) 80%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-10 w-full max-w-6xl text-center animate-fade-in-up">
        
        {/* Large Central Logo */}
        <div className="mb-20">
          <img 
            src={logoImage}
            alt="みかんプロジェクト" 
            className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Text Section - Vertical Layout with increased spacing */}
        <div className="space-y-24 font-maru">
          
          <p className="text-[17px] text-gray-900 font-bold leading-loose tracking-[0.15em]">
            みかんプロジェクトは<br />
            NHK番組を主とした映像制作会社です
          </p>
          
          <p className="text-[16px] text-gray-900 font-bold leading-loose tracking-[0.15em] opacity-80">
            世の中に埋もれた大切な忘れものを<br />
            届けることが出来たらー<br />
            そんな思いで番組を作っています
          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;