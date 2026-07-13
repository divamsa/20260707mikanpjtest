import React from 'react';
import { WORKS_DATA } from '../constants';
import { WorkCategory, WorkItem } from '../types';
import ImageWithPreview from '../components/ImageWithPreview';

// 高精細な「みかんの断面」SVGアイコン
const MikanLinkIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0 mr-2 drop-shadow-sm" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#F97316" />
    <circle cx="50" cy="50" r="42" fill="#FB923C" />
    <path d="M50 50 L50 10 A40 40 0 0 1 78.28 21.72 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L78.28 21.72 A40 40 0 0 1 90 50 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L90 50 A40 40 0 0 1 78.28 78.28 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L78.28 78.28 A40 40 0 0 1 50 90 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L50 90 A40 40 0 0 1 21.72 78.28 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L21.72 78.28 A40 40 0 0 1 10 50 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L10 50 A40 40 0 0 1 21.72 21.72 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <path d="M50 50 L21.72 21.72 A40 40 0 0 1 50 10 Z" fill="#FDBA74" stroke="#FB923C" strokeWidth="1" />
    <circle cx="50" cy="50" r="6" fill="#FFF7ED" />
  </svg>
);

const renderWorkTitle = (title: string) => {
  if (title.includes('人生で美しいとは何か')) {
    const parts = title.split(' ');
    if (parts.length > 1) {
      const mainTitle = parts[0];
      const subTitleRaw = parts.slice(1).join(' ').trim();
      const hasBracket = subTitleRaw.endsWith('」');
      const subTitleText = hasBracket ? subTitleRaw.slice(0, -1) : subTitleRaw;

      return (
        <h3 className="leading-tight">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            {mainTitle}
          </span>
          <span className="inline-block w-4"></span>
          <span className="text-[13px] md:text-[15px] font-medium opacity-80 inline-block">
            {subTitleText}
          </span>
          {hasBracket && (
            <span className="text-lg md:text-xl font-bold text-gray-900">
              」
            </span>
          )}
        </h3>
      );
    }
  }

  if (title.includes('美は喜び')) {
    const parts = title.split(/[ 　]{2,}/);
    if (parts.length > 1) {
      const mainTitle = parts[0];
      const subTitleRaw = parts.slice(1).join(' ').trim();
      const hasBracket = subTitleRaw.endsWith('」');
      const subTitleText = hasBracket ? subTitleRaw.slice(0, -1) : subTitleRaw;

      return (
        <h3 className="leading-tight">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            {mainTitle}
          </span>
          <span className="inline-block w-4"></span>
          <span className="text-[13px] md:text-[15px] font-medium opacity-80 inline-block">
            〜 {subTitleText}
          </span>
          {hasBracket && (
            <span className="text-lg md:text-xl font-bold text-gray-900">
              」
            </span>
          )}
        </h3>
      );
    }
  }

  if (title.includes('断らない　ある市役所の実践')) {
    return (
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
        {title}
      </h3>
    );
  }

  if (title.includes('～') || title.includes('〜')) {
    const parts = title.split(/([～〜][^」]*)/);
    if (parts.length > 1) {
      return (
        <h3 className="leading-tight">
          {parts.map((part, i) => {
            if (part.startsWith('～') || part.startsWith('〜')) {
              return (
                <span key={i} className="text-[13px] md:text-[15px] font-medium opacity-80 inline-block ml-1">
                  {part}
                </span>
              );
            }
            return (
              <span key={i} className="text-lg md:text-xl font-bold text-gray-900">
                {part}
              </span>
            );
          })}
        </h3>
      );
    }
  }

  if (title.startsWith("国立ハンセン病資料館 DVD")) {
    const parts = title.split("「");
    return (
      <h3 className="leading-tight">
        <span className="text-[11px] md:text-[13px] font-normal block mb-1 opacity-70">
          {parts[0].trim()}
        </span>
        {parts[1] && (
          <span className="text-lg md:text-xl font-bold text-gray-900">
            「{parts[1]}
          </span>
        )}
      </h3>
    );
  }

  return (
    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
      {title}
    </h3>
  );
};

const WorkRow: React.FC<{ item: WorkItem }> = ({ item }) => (
  <article className="mb-10 border-b border-orange-100 pb-10 last:border-0 last:pb-0">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      <div className="md:col-span-1">
        <ImageWithPreview 
          id={`work-${item.id}`}
          src={item.image} 
          alt={item.title} 
          className="aspect-video rounded-lg shadow-sm overflow-hidden border border-orange-100" 
        />
      </div>

      <div className="md:col-span-3 flex flex-col h-full">
        <div className="mb-3">
          <div className="text-sm font-sans font-bold text-black tracking-wider mb-1 opacity-60">
            {item.date}
          </div>
          {renderWorkTitle(item.title)}
        </div>

        <p className="text-sm text-black leading-relaxed mb-4 whitespace-pre-wrap">
          {item.description}
        </p>

        {item.linkText && (
          <div className="mt-auto py-1 flex items-center self-start transition-all duration-300">
            <MikanLinkIcon />
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-xs text-black font-bold block sm:inline">
                {item.categoryLabel === 'NHK 番組' && item.title.includes('すべてのもの') ? 'NHK オンデマンドでご覧いただけます（有料）' : 
                 item.categoryLabel === 'NHK 番組' && item.date.includes('2026.6') ? '2027年6月まで NHK オンデマンドでご覧いただけます（有料）' : 
                 item.categoryLabel === 'NHK 番組' && item.date.includes('2025.9') ? '2026年9月まで NHK オンデマンドでご覧いただけます（有料）' : 
                 item.categoryLabel === 'NHK 番組' && item.date.includes('2025.1') ? '関連リンク' : 
                 item.categoryLabel === 'NHK 番組' && item.date.includes('2024.1') ? '関連リンク' : 
                 item.categoryLabel === 'その他' ? 'YouTube でご覧いただけます' : '関連リンク'}
              </span>
              <span className="mx-1 hidden sm:inline text-orange-200">|</span>
              <a 
                href={item.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#46667b] hover:text-[#2c3e50] font-bold text-xs underline decoration-[#46667b]/30 underline-offset-4 block sm:inline mt-0.5 sm:mt-0 transition-colors"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  </article>
);

const Works: React.FC = () => {
  const getItems = (cat: WorkCategory, sub?: string) => {
    return WORKS_DATA.filter(w => 
      w.category === cat && (sub ? w.subCategory === sub : true)
    );
  };

  const nhkItems = getItems(WorkCategory.NHK);
  const etvItems = nhkItems.filter(w => w.subCategory?.includes('ETV'));
  const fourKItems = nhkItems.filter(w => w.subCategory?.includes('４K'));
  const nichiyoItems = nhkItems.filter(w => w.subCategory?.includes('日曜美術館'));
  const otherItems = getItems(WorkCategory.OTHER);

  return (
    <div className="pt-16 pb-8 md:pt-20 md:pb-10 bg-[#fffaf0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-20 transition-all duration-500">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-wide font-maru">Works</h1>
          <p className="text-orange-600 font-medium tracking-widest text-sm font-maru">制作実績</p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-orange-500 inline-block pb-1 font-maru">
            NHK 番組
          </h2>

          <div className="mb-10">
            <div className="bg-gray-100 py-1.5 px-4 mb-5">
              <h3 className="text-base font-bold text-black font-maru">
                ETV 特集 （E テレ）
              </h3>
            </div>
            <div className="space-y-2">
              {etvItems.map(item => <WorkRow key={item.id} item={item} />)}
            </div>
          </div>

          <div className="mb-10">
            <div className="bg-gray-100 py-1.5 px-4 mb-5">
              <h3 className="text-base font-bold text-black font-maru">
                ４K 特集 （BS４K・BSP）
              </h3>
            </div>
            <div className="space-y-2">
              {fourKItems.map(item => <WorkRow key={item.id} item={item} />)}
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-100 py-1.5 px-4 mb-5">
              <h3 className="text-base font-bold text-black font-maru">
                日曜美術館 （E テレ）
              </h3>
            </div>
            <div className="space-y-2">
              {nichiyoItems.map(item => <WorkRow key={item.id} item={item} />)}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-orange-500 inline-block pb-1 font-maru">
            その他
          </h2>
          <div className="space-y-2">
            {otherItems.map(item => <WorkRow key={item.id} item={item} />)}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Works;