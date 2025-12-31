
// Fix: Import React to resolve 'Cannot find namespace React' when using React.FC
import React, { useState, useRef } from 'react';
import Slide from './components/Slide';
import { STORY_DATA, THEMES } from './constants';

export const APP_ASSETS = {
  LOGO_URL: 'https://i.postimg.cc/Gh6nxpw4/Logo-black.png', 
  RD_VIDEO_URL: 'https://cdn.pixabay.com/video/2021/04/12/70860-537466133_large.mp4',
  LORO_PIANA_LOGO: 'https://i.postimg.cc/bvpj3bcv/4.png',
  FP_JOURNE_LOGO: 'https://i.postimg.cc/cL7pgHg6/3.png',
  WATCHWELL_LOGO_WHITE: 'https://i.postimg.cc/bJkDhVVp/Watchwell-logo-(10).png',
  KAIROS_LOGO_WHITE: 'https://i.postimg.cc/JhBtNdLB/Kairos-Logo-(1).png'
};

const LogoMark: React.FC<{ color: string }> = ({ color }) => {
  if (APP_ASSETS.LOGO_URL) {
    const isDarkBackground = color === '#FFFFFF';
    return (
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden transition-transform duration-700 hover:scale-105">
        <img 
          src={APP_ASSETS.LOGO_URL} 
          alt="WatchWell Logo" 
          className="w-full h-full object-contain transition-all duration-700 ease-in-out" 
          style={{ 
            filter: isDarkBackground 
              ? 'brightness(0) invert(1)' 
              : 'brightness(0) grayscale(1)' 
          }}
        />
      </div>
    );
  }

  return (
    <svg width="48" height="48" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/arg" className="transition-colors duration-700 drop-shadow-sm">
      <path d="M128 256 L64 256 L128 64 H256 Z" fill={color} /> 
      <path d="M384 256 L448 256 L384 64 H256 Z" fill={color} /> 
      <path d="M128 256 L64 256 L128 448 H256 Z" fill={color} /> 
      <path d="M384 256 L448 256 L384 448 H256 Z" fill={color} /> 
    </svg>
  );
};

const ReportModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 p-4 md:p-10 animate-in fade-in zoom-in-95">
      <div className="relative w-full max-w-5xl h-full bg-[#ede7e1] text-black overflow-y-auto no-scrollbar rounded-lg shadow-2xl flex flex-col print:m-0 print:p-0 print:bg-white print:shadow-none">
        
        {/* Modal Controls */}
        <div className="sticky top-0 right-0 p-6 flex justify-between items-center bg-[#ede7e1]/90 backdrop-blur-sm z-10 border-b border-black/5 print:hidden">
          <button 
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-50 transition-opacity flex items-center gap-2"
          >
            <span>←</span> Back to story
          </button>
          <div className="flex gap-6">
             <button 
               onClick={handlePrint}
               className="text-[10px] uppercase tracking-[0.4em] font-bold border border-black/20 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all"
             >
               Print / Save PDF
             </button>
             <button 
               onClick={onClose}
               className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30"
             >
               Esc
             </button>
          </div>
        </div>

        {/* Report Content */}
        <article className="p-8 md:p-20 max-w-4xl mx-auto print:p-12 font-sans text-sm md:text-base leading-relaxed text-black/90">
          
          {/* PAGE 1 CONTENT */}
          <div className="mb-20">
            <div className="flex justify-between items-start mb-16">
              <div className="max-w-2xl">
                <h1 className="font-serif text-3xl md:text-5xl mb-2 font-normal">End-of-Year Update – WatchWell</h1>
                <p className="font-serif italic text-xl md:text-2xl opacity-60">And what’s ahead in 2026</p>
              </div>
              <div className="w-12 h-12 flex-shrink-0">
                <img src={APP_ASSETS.LOGO_URL} className="w-full h-full object-contain grayscale" alt="WatchWell Logo" />
              </div>
            </div>

            <div className="space-y-6">
              <p>As 2025 comes to an end, I wanted to share a concise update on where WatchWell stands, what we’ve achieved over the past year, and where we’re heading in 2026.</p>
              <p>In October, we marked WatchWell’s first anniversary. With 2025 closing, it’s a good moment to step back, look at the progress made so far, and outline how we’re setting up 2026.</p>
              <p>Before diving in, here’s a quick snapshot of the progress we’re most excited about:</p>

              <section className="pt-4">
                <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">TL:DR</h3>
                <ul className="space-y-3 pl-1">
                  <li className="flex gap-3">
                    <span className="text-black/30">•</span>
                    <span>Two heritage luxury maisons in advanced contract discussions – one signing imminently, the second targeted for Q1 2026</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-black/30">•</span>
                    <span>Flagship validation from one of the world’s most respected independent watchmakers, plus engagement with a leading global fashion & accessories house</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-black/30">•</span>
                    <span>Version 1 of our ultra-thin chip reaching mass-production readiness, with a demo-ready device expected mid-February</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-black/30">•</span>
                    <span>Mobile app and backend fully built and launch-ready for the core monitoring + Theft Mode loop</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-black/30">•</span>
                    <span>Pipeline expansion from 2 to 15+ top-tier luxury brands in active discussions</span>
                  </li>
                </ul>
              </section>

              <section className="pt-8">
                <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Quick Snapshot</h3>
                <p>WatchWell builds ultra-miniaturized tracking and authentication technology for high-value luxury items – starting with watches and expanding into adjacent categories such as fashion, leather goods, and jewelry.</p>
                <p className="mt-4">We entered 2025 only two months after incorporation. The focus this year was very deliberate: move from concept and architecture into validated technology, concrete pilots, and serious engagement with top-tier luxury partners. That transition is now well underway.</p>
              </section>

              <section className="pt-8">
                <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Market expansion – from watches to the broader luxury ecosystem</h3>
                <p>Over the past few months, it has become clear that WatchWell addresses a significantly broader set of needs than theft detection and recovery alone.</p>
                <p className="mt-4">In discussions with maisons, our technology consistently maps to four high-priority problem areas:</p>
                <ul className="space-y-1 pl-1 mt-4">
                  <li className="flex gap-3"><span className="text-black/30">•</span> Theft prevention & recovery</li>
                  <li className="flex gap-3"><span className="text-black/30">•</span> Counterfeiting</li>
                  <li className="flex gap-3"><span className="text-black/30">•</span> Authentication & provenance</li>
                  <li className="flex gap-3"><span className="text-black/30">•</span> Compliance and traceability, increasingly driven by EU regulation (ESPR & Digital Product Passports)</li>
                </ul>
                <p className="mt-6">This broader relevance has materially expanded both our addressable market and the strategic importance of the platform within luxury organizations.</p>
              </section>

              <section className="pt-8">
                <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Commercial traction & partner validation</h3>
                <h4 className="font-bold mb-2">Contracts & flagship engagement</h4>
                <p>We are currently in contract discussions with two heritage luxury maisons:</p>
                <ul className="space-y-1 pl-1 mt-2">
                  <li className="flex gap-3"><span className="text-black/30">•</span> One agreement is expected to be signed in the coming days</li>
                  <li className="flex gap-3"><span className="text-black/30">•</span> The second is targeted for signing in Q1 2026</li>
                </ul>
                <p className="mt-4">One partner is among the most respected independent watchmakers globally; the other is a leading luxury house in fashion and accessories. These discussions are focused on real integration and deployment – not exploratory pilots.</p>

                <h4 className="font-bold mt-8 mb-2">Pipeline growth</h4>
                <p>Our active pipeline has grown from 2 to 15+ luxury brands over the course of the year, including Chanel, Hermès, Loro Piana, Bottega Veneta, Prada, Patek Philippe, F.P. Journe, Vacheron Constantin, Jaeger-LeCoultre, and Cartier.</p>
                <p className="mt-4">To put this in context, the average brand in our pipeline represents tens of billions of euros in annual revenue, hundreds of product references, and hundreds to thousands of global points of sale. Conversations have clearly shifted from “if” to “how”: integration surfaces, deployment models, data ownership, and operational impact.</p>
              </section>
            </div>
            
            <div className="print:break-after-page mt-20 border-t border-black/5" />
          </div>

          {/* PAGE 2 CONTENT */}
          <div className="space-y-8">
            <section>
              <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">R&D & product execution</h3>
              <p>This year, we moved WatchWell from a feasibility question into a scalable product direction with clear near-term proof points – at a pace that’s typically measured in multiple years in this category.</p>
              <p className="mt-4">On the hardware side, we validated an ultra-thin, manufacturable path and are on track for a demo-ready device by mid-February.</p>
              
              <div className="mt-8 mb-4">
                <p className="font-bold uppercase tracking-widest text-[10px] mb-2">Hardware timeline</p>
                <p className="font-mono text-xs bg-black/[0.03] p-4 rounded border border-black/5">
                  Jan 15 – production → Jan 25 – arrival (IL) → Feb 5 – assembly → Feb 15 – testing → demo-ready
                </p>
              </div>

              <p className="mt-6">In parallel, we built the secure-by-design platform that makes the hardware valuable at scale: fleet-level monitoring with minimal operational overhead (targeting “no human in the loop”), and end-to-end security from pairing through ongoing monitoring.</p>
              <p className="mt-4">As a result, the mobile app and backend are effectively launch-ready for the core loop (monitoring + Theft Mode) once the Gen-1 device is complete.</p>
            </section>

            <section className="pt-8">
              <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Looking ahead to 2026</h3>
              <p>2026 is about scaling execution, not redefining direction.</p>
              <p className="mt-4">Key priorities include:</p>
              <ul className="space-y-2 pl-1 mt-4">
                <li className="flex gap-3"><span className="text-black/30">•</span> Pushing thickness toward sub-0.5 mm while maximizing system and battery efficiency</li>
                <li className="flex gap-3"><span className="text-black/30">•</span> Bringing more critical R&D and system capabilities in-house</li>
                <li className="flex gap-3"><span className="text-black/30">•</span> Scaling maison-specific integrations and pilots</li>
                <li className="flex gap-3"><span className="text-black/30">•</span> Advancing long-range communication efficiency</li>
                <li className="flex gap-3"><span className="text-black/30">•</span> Expanding the platform into ownership transfer, DPP workflows, and insurer / authority integrations</li>
              </ul>
              <p className="mt-6">Step by step, we’re translating the vision into reality: a security and trust standard for luxury objects – starting with watches and extending into adjacent categories</p>
            </section>

            <section className="pt-8">
              <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Brand evolution – WatchWell → Kairos</h3>
              <p>In 2026, we will be rebranding from WatchWell to Kairos.</p>
              <p className="mt-4">The shift reflects how the company has evolved – from a watch-focused solution into a broader platform for security, provenance, and trust across the luxury ecosystem.</p>
              <p className="mt-4">Kairos is an ancient Greek term for the right moment – when precision, context, and action converge. It captures what we are building: discreet, embedded infrastructure that activates when it matters most, protecting value and authenticity without disrupting the object or the brand.</p>
              <p className="mt-4">The rebrand will roll out alongside product milestones and partner announcements throughout 2026.</p>
            </section>

            <section className="pt-8 pb-12">
              <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Final Word</h3>
              <p>We’ve deliberately front-loaded the hardest risks early: technical feasibility, market demand, and partner willingness.</p>
              <p className="mt-4">We’re entering 2026 with validated demand, credible flagship engagement, a clear product direction, and a focused plan to scale what already works.</p>
              <p className="mt-4">Thank you, as always, for the trust and support.</p>
              
              <div className="mt-20 text-center">
                <p className="font-serif italic text-xl">Wishing you and your family a restful end of the year and a strong start to 2026,</p>
                <p className="font-bold mt-4 uppercase tracking-[0.4em]">Kairos</p>
              </div>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-black/5 text-[9px] uppercase tracking-widest opacity-30 flex justify-between items-center">
            <span>Confidential — Internal Investor Update — 2025</span>
            <span className="print:hidden">Page 1 / 2</span>
          </footer>
        </article>
      </div>
    </div>
  );
};

const RDAnimation: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none z-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent" />
      <div 
        className="absolute bottom-[-100px] left-[-25%] w-[150%] h-[200%] border-t border-brand-gold/10"
        style={{
          background: `linear-gradient(90deg, rgba(194,181,155,0.08) 1px, transparent 1px), 
                       linear-gradient(rgba(194,181,155,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(55deg)',
          animation: 'rd-grid-scroll 20s linear infinite'
        }}
      />
      <style>{`
        @keyframes rd-grid-scroll {
          from { background-position: 0 0; }
          to { background-position: 0 40px; }
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const newIndex = Math.round(scrollTop / height);
    if (newIndex !== activeSlideIndex && newIndex >= 0 && newIndex < STORY_DATA.length) {
      setActiveSlideIndex(newIndex);
    }
  };

  const handleSlideAction = (action: string) => {
    if (action === 'OPEN_REPORT') {
      setShowReport(true);
    }
  };

  const currentData = STORY_DATA[activeSlideIndex];
  const isDark = currentData?.textColor === 'white';
  const currentTheme = currentData?.theme;
  const activeSlideNumber = activeSlideIndex + 1;

  const spinalThemes = THEMES.filter(t => t !== 'Intro' && t !== 'Closing');
  const currentThemeIdx = THEMES.indexOf(currentTheme);

  const isMarketNeedsSequence = currentData?.type === 'market-needs';
  const isPartnerRevealSequence = currentData?.type === 'partner-reveal';
  const isRebrandingSequence = ['logo-morph', 'dictionary-definition', 'kairos-vision'].includes(currentData?.type || '');

  // Explicit logo state for rebranding sequence
  const showWatchwell = currentData?.type === 'logo-morph';
  const showKairos = currentData?.type === 'dictionary-definition' || currentData?.type === 'kairos-vision';

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden selection:bg-brand-gold selection:text-black">
      
      <ReportModal isOpen={showReport} onClose={() => setShowReport(false)} />

      <header className="fixed top-0 left-0 w-full z-[100] p-6 md:p-10 pointer-events-none">
        <div className="max-w-[1400px] mx-auto w-full relative flex flex-col items-start gap-4">
          <div className="w-full flex gap-1 opacity-60">
            {STORY_DATA.map((_, idx) => {
              const isCompleted = idx < activeSlideIndex;
              const isCurrent = idx === activeSlideIndex;
              let opacity = 'opacity-[0.15]';
              if (isCurrent) opacity = 'opacity-100 scale-y-[1.5]';
              else if (isCompleted) opacity = 'opacity-40';
              return (
                <div 
                  key={idx}
                  className={`h-[1px] flex-1 rounded-full transition-all duration-500 ${opacity} ${
                    isDark ? 'bg-white' : 'bg-black'
                  }`}
                />
              );
            })}
          </div>

          <div className="pointer-events-auto">
            <LogoMark color={isDark ? '#FFFFFF' : '#000000'} />
          </div>

          {activeSlideNumber >= 5 && activeSlideNumber <= 9 && (
            <div className={`w-full mt-2 transition-all duration-1000 ease-in-out flex flex-col ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <div className="font-serif text-lg md:text-2xl italic opacity-60 leading-tight text-left">
                What we thought we were building…
              </div>
              <div className="font-serif text-lg md:text-2xl italic opacity-60 leading-tight text-right">
                …and what the market pulled us into
              </div>
            </div>
          )}
        </div>
      </header>

      {/* FIXED REBRANDING OVERLAY */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-8 transition-all duration-[1200ms] cubic-bezier(0.19, 1, 0.22, 1) ${isRebrandingSequence ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
          <div className="w-full h-full relative flex flex-col items-center">
            
            {/* Rebranding Title (Top) */}
            <div className={`absolute top-12 sm:top-16 transition-all duration-[1000ms] delay-300 z-40 ${isRebrandingSequence ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <p className="font-serif italic text-lg sm:text-2xl font-normal text-center text-white">Rebranding</p>
            </div>

            {/* Centered Logo Box */}
            <div className={`absolute top-[18vh] w-full flex flex-col items-center transition-all duration-[1400ms] cubic-bezier(0.19, 1, 0.22, 1) ${
              isRebrandingSequence ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="relative w-[75vw] md:w-[900px] h-[30vh] md:h-[500px]">
                {/* WatchWell Logo - Shown ONLY during logo-morph */}
                <img 
                  src={APP_ASSETS.WATCHWELL_LOGO_WHITE} 
                  alt="WatchWell Logo" 
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) ${
                    showWatchwell ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-95'
                  }`}
                />
                {/* Kairos Logo - Shown during definition and vision slides */}
                <img 
                  src={APP_ASSETS.KAIROS_LOGO_WHITE} 
                  alt="Kairos Logo" 
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) ${
                    showKairos ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'
                  }`}
                />
              </div>

              {/* Transition Text - Appears when Watchwell is shown */}
              <div className={`mt-20 md:mt-24 transition-all duration-[1000ms] flex flex-col items-center gap-3 ${
                showWatchwell 
                ? 'opacity-100 translate-y-0 delay-[1000ms]' 
                : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <p className="text-[11px] md:text-sm uppercase tracking-[0.5em] font-bold text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">from WatchWell to Kairos</p>
                <p className="font-serif italic text-lg md:text-2xl text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">A natural evolution</p>
              </div>
            </div>

            {/* Slide 30 (Dictionary Definition) */}
            <div className={`absolute top-[48vh] w-full max-w-3xl px-8 flex flex-col items-center text-center transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) ${currentData.type === 'dictionary-definition' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
              <div className="border-l border-white/20 pl-6 text-left">
                <p className="font-serif text-xl md:text-3xl text-white mb-6 leading-relaxed italic">
                  <span className="font-bold not-italic mr-2">Kairos:</span> 
                  In ancient Greek, Kairos represents the right moment - the point in time when precision, context, and action converge
                </p>
                <div className="h-[1px] w-12 bg-brand-gold opacity-50 mb-6" />
                <p className="font-serif text-lg md:text-2xl text-white/60 leading-relaxed font-light">
                  It is not about measuring time.<br/>
                  It is about acting when it matters most.
                </p>
              </div>
            </div>

            {/* Slide 31 (Kairos Vision) */}
            <div className={`absolute top-[48vh] w-full max-w-5xl px-8 flex flex-col items-center text-center transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) ${currentData.type === 'kairos-vision' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
              <p className="font-serif text-lg md:text-3xl lg:text-4xl text-white leading-relaxed tracking-tight max-w-4xl">
                "What began as a solution for watches has proven to be something larger. Our technology now sits at the intersection of security, provenance, and trust – across the entire luxury ecosystem. Kairos reflects what the company has become: infrastructure for protecting value, heritage, and authenticity at scale."
              </p>
            </div>
          </div>
        </div>

      {/* FIXED MARKET NEEDS OVERLAY */}
      {isMarketNeedsSequence && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-8">
          {currentData.customData?.showRDAnimation && <RDAnimation />}
          <div className={`w-full h-full max-w-6xl relative flex flex-col items-center justify-start pt-[28vh] md:pt-[25vh] transition-all duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            {currentData.topTitle && (
              <div className="absolute top-12 sm:top-16 transition-all duration-1000 ease-out opacity-70">
                <p className="font-serif italic text-lg sm:text-2xl font-normal text-center">
                  {currentData.topTitle}
                </p>
              </div>
            )}
            <h2 className={`transition-all duration-1000 ${
              currentData.headline.length < 40 
                ? 'text-[10px] uppercase tracking-[0.5em] mb-12 sm:mb-16 opacity-30 font-bold' 
                : 'font-serif text-2xl md:text-4xl lg:text-5xl leading-tight mb-12 sm:mb-16'
            } text-center px-4 max-w-5xl`}>
              {currentData.headline}
            </h2>
            <div className="flex flex-col gap-5 md:gap-7 lg:gap-9 w-full items-center">
              {(currentData.customData?.items || [
                'Theft prevention & recovery',
                'Counterfeiting',
                'Authentication & provenance',
                'Compliance & traceability (ESPR, DPP)'
              ]).map((need: string, i: number) => {
                const revealedCount = currentData.customData?.revealedCount ?? 0;
                const isVisible = revealedCount > i;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`text-xl md:text-3xl lg:text-4xl font-serif text-center transition-all cubic-bezier(0.19, 1, 0.22, 1) ${
                        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
                      }`}
                      style={{ 
                        transitionDuration: '1400ms',
                        transitionDelay: isVisible ? `${i * 150}ms` : '0ms'
                      }}
                    >
                      {need}
                    </div>
                    {i === 3 && !currentData.customData?.items && (
                       <div className={`mt-10 h-[1px] w-24 mx-auto bg-brand-gold transition-opacity duration-[1500ms] ${
                           isVisible ? 'opacity-50' : 'opacity-0'
                         }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PARTNER REVEAL SEQUENCE OVERLAY */}
      {isPartnerRevealSequence && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-8">
          <div className="w-full h-full relative flex flex-col items-center">
            <div className={`absolute top-12 sm:top-16 transition-all duration-1000 ease-out z-40 opacity-70`}>
              <p className={`font-serif italic text-lg sm:text-2xl font-normal text-center text-white`}>
                {currentData.topTitle}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-full max-w-5xl px-6 pt-24 text-center">
              <h1 className="font-serif text-4xl md:text-7xl leading-tight mb-8 text-white transition-all duration-1000">
                {currentData.headline}
              </h1>
              <div className="text-xl md:text-3xl font-light text-white/60 mb-16">
                {currentData.subline?.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </div>
              <div className="flex items-start justify-center gap-12 md:gap-32 min-h-[320px] md:min-h-[500px] w-full">
                <div className={`flex flex-col items-center transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${
                  currentData.customData.revealedCount >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <div className="h-32 md:h-64 flex items-center justify-center mb-6">
                    <img src={APP_ASSETS.LORO_PIANA_LOGO} alt="Loro Piana" className="h-full object-contain" />
                  </div>
                  <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-white/50">Loro Piana</span>
                </div>
                <div className={`flex flex-col items-center transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${
                  currentData.customData.revealedCount >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <div className="h-32 md:h-64 flex items-center justify-center mb-6">
                    <img src={APP_ASSETS.FP_JOURNE_LOGO} alt="F.P. Journe" className="h-full object-contain" />
                  </div>
                  <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-white/50">F.P. Journe</span>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-24 transition-all duration-1000`}>
              <p className="text-[10px] md:text-xs font-medium text-[#8b0000] tracking-wider uppercase text-center px-4 animate-pulse">
                {currentData.disclaimer}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full z-[100] p-8 md:p-12 pointer-events-none">
        <div className="relative max-w-[1400px] mx-auto w-full flex items-end justify-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-12">
            {spinalThemes.map((theme) => {
              const themeGlobalIdx = THEMES.indexOf(theme);
              const isCurrent = theme === currentTheme;
              const isPast = themeGlobalIdx < currentThemeIdx;
              const isFuture = themeGlobalIdx > currentThemeIdx;
              const inMainNarrative = currentTheme !== 'Intro' && currentTheme !== 'Closing';
              let visibilityClass = 'opacity-[0.1]';
              if (inMainNarrative) {
                if (isCurrent) visibilityClass = 'opacity-90 scale-105 font-bold';
                else if (isPast) visibilityClass = 'opacity-30';
                else if (isFuture) visibilityClass = 'opacity-[0.15]';
              }
              return (
                <div key={theme} className={`text-[8px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-700 ${visibilityClass} ${isDark ? 'text-white' : 'text-black'}`}>
                  {theme}
                </div>
              );
            })}
          </div>
          <div className={`absolute right-0 text-[10px] font-mono tracking-[0.3em] transition-opacity duration-700 hidden sm:block ${isDark ? 'text-white/20' : 'text-black/10'}`}>
            {activeSlideNumber.toString().padStart(2, '0')} / {STORY_DATA.length}
          </div>
        </div>
      </footer>

      <div ref={containerRef} className="story-container no-scrollbar h-screen overflow-y-scroll" onScroll={handleScroll}>
        {STORY_DATA.map((slide, idx) => (
          <Slide 
            key={idx} 
            data={slide} 
            isActive={activeSlideIndex === idx} 
            assets={APP_ASSETS}
            onAction={handleSlideAction}
            isSequenceMember={slide.type === 'market-needs' || slide.type === 'partner-reveal' || ['logo-morph', 'dictionary-definition', 'kairos-vision'].includes(slide.type || '')}
          />
        ))}
      </div>

      <div className={`fixed bottom-24 right-8 md:right-12 flex flex-col items-center gap-6 transition-all duration-1000 ${activeSlideNumber <= 2 ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <span className={`text-[9px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] transition-colors duration-500 font-bold ${isDark ? 'text-white' : 'text-black'}`}>Scroll to Navigate</span>
          <div className={`w-[1px] h-12 transition-colors duration-500 ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
      </div>
    </div>
  );
};

export default App;
