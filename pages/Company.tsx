import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Company: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const unfinishedLogo = "https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769666392/20260129mikanpjlogoskelton_pgq4rb.png";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: `【みかんプロジェクトHP】お問い合わせ（${formData.get('name')}様）`,
      _replyto: formData.get('email'),
      _template: 'box',
      _captcha: 'false'
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/itsuki@mikanpro.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setFormState('success');
      } else {
        console.error("FormSubmit error:", result);
        setErrorMessage(result.message || '送信に失敗しました。');
        setFormState('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage('ネットワークエラーが発生しました。');
      setFormState('error');
    }
  };

  return (
    <div className="pt-16 pb-8 md:pt-20 md:pb-12 bg-[#fffaf0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-20 transition-all duration-500">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-wide font-maru">Company</h1>
          <p className="text-orange-600 font-medium tracking-widest text-sm font-maru">会社概要</p>
        </header>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-12 border border-black/5">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-black pl-4 mb-8 font-maru">
              会社情報
            </h2>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">商号</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold font-maru">{COMPANY_INFO.name}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">代表取締役</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold font-maru">{COMPANY_INFO.ceo}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">設立</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold">{COMPANY_INFO.establishment}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">資本金</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold">{COMPANY_INFO.capital}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-400">業務内容</dt>
                <dd className="mt-1 text-lg text-gray-900 font-medium">{COMPANY_INFO.business}</dd>
              </div>
            </dl>
          </div>
        </div>

        <section className="bg-white rounded-2xl p-8 sm:p-12 text-gray-800 border border-black/10 shadow-sm relative overflow-hidden">
          <div className="text-left mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-black font-maru">Contact</h2>
            <div className="text-lg text-gray-600 font-medium leading-relaxed">
              <p>番組のご感想、その他お問い合わせは下記フォームよりお願いいたします。</p>
            </div>
          </div>

          {formState === 'success' ? (
             <div className="bg-[#fffaf0] rounded-xl p-10 text-center animate-fade-in-up border border-orange-100 shadow-inner">
                <div className="text-6xl mb-6">🍊</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 font-maru">送信完了しました</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  お問い合わせありがとうございます。<br/>
                  内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-2 text-sm text-gray-400 underline hover:text-orange-500 transition-colors"
                >
                  フォームに戻る
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl space-y-5 relative z-10">
              {/* スパム対策用ハニーポット（ボットが自動入力するとスパム判定される） */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">お名前</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 resize-none transition-all"
                  placeholder="こちらにメッセージをご入力ください"
                ></textarea>
              </div>

              {formState === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <div>
                    <p>送信に失敗しました。時間をおいて再度お試しください。</p>
                    {errorMessage && <p className="mt-1 text-xs text-red-400">{errorMessage}</p>}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={`
                    w-full sm:w-auto inline-flex items-center justify-center bg-[#ffca80] text-white font-bold py-4 px-16 rounded-full shadow-lg transition-all 
                    ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed translate-y-0 shadow-none' : 'hover:bg-[#ffbd66] hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-sm'}
                  `}
                >
                  {formState === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </>
                  ) : (
                    '送信する'
                  )}
                </button>
              </div>
            </form>
          )}
        </section>

        <div className="mt-16 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <img 
              src={unfinishedLogo} 
              alt="未完のプロジェクト" 
              className="w-[12rem] md:w-[16rem] h-auto opacity-80 group-hover:opacity-100 transition-all duration-700 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full -z-10 group-hover:bg-green-500/15 transition-all duration-700 scale-125"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
