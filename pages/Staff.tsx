import React from 'react';
import { STAFF_DATA } from '../constants';

// 高精細な「みかんの断面」SVGアイコン
const MikanLinkIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4 inline-block mx-1 mt-0.5 align-middle drop-shadow-sm" aria-hidden="true">
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

const Staff: React.FC = () => {
  const staff = STAFF_DATA[0];

  /**
   * 特定のテキストのスタイル（フォント、ウェイト、サイズ、色）を個別に調整する
   */
  const renderFormattedText = (text: string) => {
    const italicTarget = "“Indonesia’s Garbage Clinic”";
    
    // 指示により 14px にする対象
    const targets14px = [
      "日本民間放送連盟賞優秀賞",
      "ギャラクシー賞小室等個人賞",
      "ギャラクシー賞優秀賞",
      "（ぶどう社）",
      "（リトル・モア）",
      "（パーソナリティー：鷺沢萌・春風亭昇太）",
      "（スイス、フランス、ボスニア・ヘルツェゴビナ）"
    ];

    const normalWeightTargets16px: string[] = [];

    const largeTextTargets16px = [
      "「こけしの詩　～宮城県 鳴子町～」",
      "「都をどりのころ　～京都 祇園～」",
      "「風の町にうたが舞う　～北海道 江差町～」",
      "「活躍！ドイツ海賊党　～ネット世代の政治のゆくえ」",
      "「激動スコットランド イギリス独立投票の行方」",
      "「川端康成 愛（いと）しの山水」",
      "「藤田嗣治・乳白色の裸婦の秘密」",
      "「宮城県東松島市 指定避難所を襲った大津波」",
      "「一杯の至福 コーヒー」",
      "「夏の輝き 氷」"
    ];

    // 改行対象のパターンと、改行前に残す文字列のペア
    const breakPatterns = [
      { target: "（2008.1）　ほか", keep: "（2008.1）" },
      { target: "（2014.8） ディレクター ほか", keep: "（2014.8） ディレクター" },
      { target: "（2012.5） ほか", keep: "（2012.5）" },
      { target: "(貧しい人々に医療を） P　ほか", keep: "(貧しい人々に医療を） P" }
    ];

    let parts: (string | React.ReactNode)[] = [text];

    // 1. イタリック体 (MS PGothic) の処理 - 16px
    let tempParts: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string' && part.includes(italicTarget)) {
        const segments = part.split(italicTarget);
        segments.forEach((seg, i) => {
          tempParts.push(seg);
          if (i < segments.length - 1) {
            tempParts.push(
              <span 
                key={`italic-${i}`}
                style={{ 
                  fontFamily: '"MS PGothic", "MS Ｐゴシック", "MSP Gothic", sans-serif', 
                  fontWeight: 'normal', 
                  fontStyle: 'italic',
                  fontSize: '16px'
                }}
              >
                {italicTarget}
              </span>
            );
          }
        });
      } else {
        tempParts.push(part);
      }
    });
    parts = tempParts;

    // 2. 「ほか」の改行処理 (16px)
    let partsWithBreak: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        let matchedPattern = null;
        for (const pattern of breakPatterns) {
          if (part.includes(pattern.target)) {
            matchedPattern = pattern;
            break;
          }
        }

        if (matchedPattern) {
          const segments = part.split(matchedPattern.target);
          segments.forEach((seg, i) => {
            partsWithBreak.push(seg);
            if (i < segments.length - 1) {
              partsWithBreak.push(matchedPattern.keep);
              partsWithBreak.push(<br key={`br-hoka-1-${i}-${matchedPattern.keep}`} />);
              partsWithBreak.push(<br key={`br-hoka-2-${i}-${matchedPattern.keep}`} />);
              
              partsWithBreak.push(
                <span 
                  key={`hoka-${i}-${matchedPattern.keep}`} 
                  className="text-[16px]"
                >
                  ほか
                </span>
              );
            }
          });
        } else {
          partsWithBreak.push(part);
        }
      } else {
        partsWithBreak.push(part);
      }
    });
    parts = partsWithBreak;

    // 3. 指定箇所の 14px 化処理
    targets14px.forEach(target => {
       let currentParts: (string | React.ReactNode)[] = [];
       parts.forEach(part => {
         if (typeof part === 'string' && part.includes(target)) {
           const segments = part.split(target);
           segments.forEach((seg, i) => {
             currentParts.push(seg);
             if (i < segments.length - 1) {
                currentParts.push(
                  <span key={`small14-${target}-${i}`} className="text-[14px] font-normal inline-block">
                    {target}
                  </span>
                );
             }
           });
         } else {
           currentParts.push(part);
         }
       });
       parts = currentParts;
    });

    // 4. 番組タイトルなどの 16px 処理
    largeTextTargets16px.forEach(target => {
       let currentParts: (string | React.ReactNode)[] = [];
       parts.forEach(part => {
         if (typeof part === 'string' && part.includes(target)) {
           const segments = part.split(target);
           segments.forEach((seg, i) => {
             currentParts.push(seg);
             if (i < segments.length - 1) {
                currentParts.push(
                  <span key={`large16-${target}-${i}`} className="text-[16px] font-normal inline-block">
                    {target}
                  </span>
                );
             }
           });
         } else {
           currentParts.push(part);
         }
       });
       parts = currentParts;
    });

    // 5. 全ての年月パターンを 16px にする処理
    const datePattern = /[（(]\d{4}\.\d{1,2}[)）]/g;
    let partsWithDate: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const split = part.split(datePattern);
        const matches = part.match(datePattern);
        
        split.forEach((seg, i) => {
          partsWithDate.push(seg);
          if (matches && i < matches.length) {
            partsWithDate.push(
              <span key={`date-${i}-${matches[i]}`} className="text-[16px] font-normal">
                {matches[i]}
              </span>
            );
          }
        });
      } else {
        partsWithDate.push(part);
      }
    });
    parts = partsWithDate;

    // 6. その他の 16px ターゲットの処理
    normalWeightTargets16px.forEach(target => {
      let currentParts: (string | React.ReactNode)[] = [];
      parts.forEach(part => {
        if (typeof part === 'string' && part.includes(target)) {
          const segments = part.split(target);
          segments.forEach((seg, i) => {
            currentParts.push(seg);
            if (i < segments.length - 1) {
              currentParts.push(
                <span key={`normal16-${target}-${i}`} className="text-[16px] font-normal inline-block">
                  {target}
                </span>
              );
            }
          });
        } else {
          currentParts.push(part);
        }
      });
      parts = currentParts;
    });

    // 7. ▼ を黒色にする処理
    let finalParts: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string' && part.includes('▼')) {
        const segments = part.split('▼');
        segments.forEach((seg, i) => {
          finalParts.push(seg);
          if (i < segments.length - 1) {
            finalParts.push(<span key={`triangle-${i}`} className="text-black inline">▼</span>);
          }
        });
      } else {
        finalParts.push(part);
      }
    });
    parts = finalParts;

    // 8. 改行なしの「ほか」を 16px にする処理
    let partsWithHokaPlain: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string' && part.includes('ほか')) {
        const segments = part.split('ほか');
        segments.forEach((seg, i) => {
          partsWithHokaPlain.push(seg);
          if (i < segments.length - 1) {
            partsWithHokaPlain.push(<span key={`hoka-16-${i}`} className="text-[16px]">ほか</span>);
          }
        });
      } else {
        partsWithHokaPlain.push(part);
      }
    });
    parts = partsWithHokaPlain;

    return <>{parts}</>;
  };

  /**
   * 行全体の構成を解析し、タイトル部分(16px)と補足部分(16px/14px)に分けてレンダリングする
   */
  const renderItemText = (text: string) => {
    // 例外処理: デコボコ映画館
    if (text.includes('デコボコ映画館')) {
      const prefix = '■';
      const titleMain = '「デコボコ映画館 粉雪まみれインタビュー集';
      const titleSub = 'ハンディキャップ映画について語ろう';
      const titleEnd = '」';
      const suffix = '（リトル・モア）'; // ここは 14px

      return (
        <div className="leading-relaxed">
          <span className="text-[14px] font-normal text-black">{prefix}</span>
          <span className="text-[16px] font-normal text-black">{titleMain}</span>
          <span className="inline-block w-6"></span>
          <span className="text-[16px] font-normal text-black">{titleSub}</span>
          <span className="text-[16px] font-normal text-black">{titleEnd}</span>
          <span className="text-[14px] font-normal text-black">{suffix}</span>
        </div>
      );
    }

    // パターン: ■Prefix「Title」Suffix
    const startBracketIndex = text.indexOf('「');
    const endBracketRealIndex = text.indexOf('」');

    if (text.startsWith('■') && startBracketIndex !== -1 && endBracketRealIndex !== -1 && endBracketRealIndex > startBracketIndex) {
      const prefix = text.substring(0, startBracketIndex);
      const title = text.substring(startBracketIndex, endBracketRealIndex + 1);
      const suffix = text.substring(endBracketRealIndex + 1);

      return (
        <div className="leading-relaxed">
          {prefix && (
            <span className="text-[14px] font-normal text-black">
              {renderFormattedText(prefix)}
            </span>
          )}
          <span className="text-[16px] font-normal text-black">
            {renderFormattedText(title)}
          </span>
          {suffix && (
            <span className="text-[16px] font-normal text-black">
              {renderFormattedText(suffix)}
            </span>
          )}
        </div>
      );
    }
    
    return (
      <div className="text-[16px] font-normal text-black">
        {renderFormattedText(text)}
      </div>
    );
  };

  return (
    <div className="pt-16 pb-8 md:pt-20 md:pb-12 bg-[#fffaf0] font-maru text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-20 transition-all duration-500">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-wide font-maru">Staff</h1>
          <p className="text-orange-600 font-medium tracking-widest text-sm font-maru">スタッフ</p>
        </header>

        <section className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-lg md:text-xl font-bold text-black mb-2 font-maru tracking-widest">
                {staff.role}
              </h2>
              <div className="text-[20px] font-bold text-black font-maru tracking-tighter">
                {staff.name}
              </div>
            </div>
            <div className="text-[16px] leading-relaxed text-black whitespace-pre-wrap font-medium">
              {staff.profile}
            </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-black mb-6 border-b-2 border-orange-500 inline-block pb-1 font-maru">
            これまでの主な仕事
          </h3>
          
          <div className="space-y-8">
            {staff.history.map((group) => (
              <div key={group.id} className="w-full">
                {group.type === 'gray-bar' && (
                  <div className="bg-gray-100 py-1.5 px-4 mb-4 flex justify-between items-center">
                    <h4 className="font-bold text-black text-base">{group.title}</h4>
                    {group.title === 'NHK テレビ番組' && (
                      <span className="text-xs font-normal text-black">※P はプロデューサー</span>
                    )}
                  </div>
                )}

                {group.type === 'simple-header' && (
                  <h4 className="font-bold text-black text-base underline decoration-orange-200 underline-offset-8 mb-4 mt-6">
                    {group.title}
                  </h4>
                )}

                {group.type === 'year-box' && (
                  <div className="mb-4 mt-8 border-b-2 border-black pb-0.5">
                    <span className="text-lg font-bold text-black font-maru inline-block">
                      {group.title}
                    </span>
                  </div>
                )}

                <ul className="space-y-3 pl-1">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="text-base leading-relaxed text-black">
                      {renderItemText(item.text)}
                      
                      {item.notes && item.notes.length > 0 && (
                        <div className="mt-2 ml-4 text-sm sm:text-base text-black space-y-3">
                          {item.notes.map((note, nIdx) => {
                             const parts = note.split('👉');
                             const hasLink = parts.length > 1;
                             let linkText = '';
                             let linkUrl = '';
                             let suffixText = '';
                             
                             if (hasLink) {
                                 const rawLinkPart = parts[1].trim();
                                 const subParts = rawLinkPart.split('|');
                                 
                                 const urlIndex = subParts.findIndex(p => p.trim().startsWith('http'));
                                 
                                 if (urlIndex !== -1) {
                                     linkText = subParts.slice(0, urlIndex).join('|').trim();
                                     linkUrl = subParts[urlIndex].trim();
                                     if (subParts.length > urlIndex + 1) {
                                         suffixText = subParts.slice(urlIndex + 1).join('|');
                                     }
                                 } else {
                                     linkText = rawLinkPart;
                                     linkUrl = rawLinkPart;
                                 }

                                 linkText = linkText.replace(/^関連リンク[　\s]*/, '');
                             }
                             
                             const isHttp = linkUrl.startsWith('http');
                             const prefixText = parts[0];
                             const isTargetForIconSwap = prefixText.includes('一杯の至福') || prefixText.includes('夏の輝き');
                             
                             let prefixMain = prefixText;
                             let prefixLabel = '';
                             
                             if (isTargetForIconSwap) {
                               const splitKey = '関連リンク';
                               const idx = prefixText.lastIndexOf(splitKey);
                               if (idx !== -1) {
                                 prefixMain = prefixText.substring(0, idx);
                                 prefixLabel = prefixText.substring(idx);
                               }
                             }

                             return (
                                <div key={nIdx}>
                                    {hasLink ? (
                                        <div className="group hover:bg-white p-1.5 rounded-lg border border-transparent hover:border-orange-100 transition-all shadow-sm leading-relaxed text-black flex items-start sm:items-center flex-wrap">
                                            {isTargetForIconSwap ? (
                                              <>
                                                {prefixMain.trim() && (
                                                  <div className="w-full ml-1 font-bold mb-1">
                                                    {renderFormattedText(prefixMain)}
                                                  </div>
                                                )}
                                                <MikanLinkIcon />
                                                {prefixLabel && (
                                                   <span className="ml-1 mr-0.5 font-bold whitespace-pre">
                                                    {renderFormattedText(prefixLabel)}
                                                  </span>
                                                )}
                                              </>
                                            ) : (
                                              <>
                                                <MikanLinkIcon />
                                                {prefixText.trim() && (
                                                  <span className="ml-1 mr-0.5 font-bold whitespace-pre">
                                                    {renderFormattedText(prefixText)}
                                                  </span>
                                                )}
                                              </>
                                            )}
                                            
                                            <a 
                                                href={isHttp ? linkUrl : '#'} 
                                                className="text-[#46667b] hover:text-[#2c3e50] underline font-bold transition-all ml-1"
                                                target={isHttp ? "_blank" : undefined}
                                                rel={isHttp ? "noopener noreferrer" : undefined}
                                            >
                                                {linkText}
                                            </a>
                                            {suffixText && (
                                              (note.includes('夏の輝き') && suffixText.trim() === 'ほか') ? (
                                                <>
                                                  <div className="basis-full h-0"></div>
                                                  <div className="basis-full h-5"></div>
                                                  <span className="text-[16px] text-black font-medium">
                                                    ほか
                                                  </span>
                                                </>
                                              ) : (
                                                <span className="text-black ml-1 font-medium">
                                                  {suffixText}
                                                </span>
                                              )
                                            )}
                                        </div>
                                    ) : (
                                        <div className={
                                          note.trim().startsWith('▼') 
                                            ? "p-1.5 pl-2.5 text-black font-medium" 
                                            : `py-0.5 text-black ${note.trim() === '以降シリーズ化' ? 'font-bold' : 'font-medium'}`
                                        }>
                                          {renderFormattedText(note)}
                                        </div>
                                    )}
                                </div>
                             );
                          })}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;