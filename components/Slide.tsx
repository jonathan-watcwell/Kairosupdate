
// Fix: Import React to resolve 'Cannot find namespace React' when using React.FC
import React, { useEffect, useState, useRef } from 'react';
import { SlideData } from '../types';

interface SlideProps {
  data: SlideData;
  isActive: boolean;
  assets?: {
    LOGO_URL: string;
    RD_VIDEO_URL: string;
    LORO_PIANA_LOGO?: string;
    FP_JOURNE_LOGO?: string;
    WATCHWELL_LOGO_WHITE?: string;
    KAIROS_LOGO_WHITE?: string;
  };
  onAction?: (action: string) => void;
  isSequenceMember?: boolean;
}

const ValidationBackground: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-black to-black" />
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute h-full bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent blur-[120px]"
          style={{
            width: `${20 + Math.random() * 30}%`,
            left: '-50%',
            top: 0,
            opacity: 0,
            animation: isActive ? `luxury-flow ${15 + i * 4}s ease-in-out infinite` : 'none',
            animationDelay: `${i * -3}s`,
          }}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-brand-gold/40 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0,
            animation: isActive ? `float-particle ${10 + i * 2}s linear infinite` : 'none',
            animationDelay: `${i * -1.5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes luxury-flow {
          0% { transform: translateX(0%) skewX(-15deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateX(600%) skewX(-15deg); opacity: 0; }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-200px) scale(1.5); opacity: 0; }
        }
        @keyframes bubble-float-1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(8px) rotate(1deg); }
          66% { transform: translateY(5px) translateX(-5px) rotate(-1deg); }
        }
        @keyframes bubble-float-2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(12px) translateX(-10px) rotate(-2deg); }
          66% { transform: translateY(-10px) translateX(5px) rotate(1.5deg); }
        }
        @keyframes morph-blob-1 {
          0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
          33% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
          66% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
        }
        @keyframes morph-blob-2 {
          0%, 100% { border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; }
          33% { border-radius: 54% 46% 70% 30% / 60% 33% 67% 40%; }
          66% { border-radius: 44% 56% 40% 60% / 30% 60% 40% 70%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes refined-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); filter: blur(30px); }
          50% { opacity: 1.0; transform: scale(1.2); filter: blur(50px); }
        }
        @keyframes button-flicker {
          0%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(194, 181, 155, 0.4); border-color: rgba(194, 181, 155, 0.4); }
          50% { opacity: 0.7; text-shadow: 0 0 5px rgba(194, 181, 155, 0.2); border-color: rgba(194, 181, 155, 0.2); }
          75% { opacity: 0.9; text-shadow: 0 0 15px rgba(194, 181, 155, 0.6); border-color: rgba(194, 181, 155, 0.6); }
        }
      `}</style>
    </div>
  );
};

const Slide: React.FC<SlideProps> = ({ data, isActive, assets, onAction, isSequenceMember }) => {
  const [stage, setStage] = useState(0);
  const [tick, setTick] = useState(0);
  const [marketNum, setMarketNum] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isValidationSequence = (data.id >= 12 && data.id <= 122) || data.id === 13;

  useEffect(() => {
    if (isActive) {
      setStage(0);
      setMarketNum(1);
      const timers: number[] = [];
      const delayTypes = ['reveal-scroll', 'intro', 'numeric', 'morph', 'brand-list', 'technical-schematic', 'layered-reveal', 'video', 'standard', 'market-expansion', 'partner-reveal', 'bubble-comparison', 'hardware-timeline', 'vision-reality', 'market-needs', 'seed-round'];
      
      if (data.type && delayTypes.includes(data.type)) {
        timers.push(window.setTimeout(() => setStage(1), 300));
        timers.push(window.setTimeout(() => setStage(2), 1400));
        timers.push(window.setTimeout(() => setStage(3), 2800));
      }

      // Handle market expansion counting animation
      if (data.type === 'market-expansion') {
        timers.push(window.setTimeout(() => {
          let current = 1;
          const interval = setInterval(() => {
            current += 1;
            setMarketNum(current);
            if (current >= 10) clearInterval(interval);
          }, 100);
        }, 1500));
      }

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(e => console.log("Video auto-play blocked", e));
      }
      
      const ticker = window.setInterval(() => setTick(t => (t + 1) % 4000), 20);
      return () => {
        timers.forEach(t => clearTimeout(t));
        clearInterval(ticker);
      };
    } else {
      setStage(0);
      setMarketNum(1);
      if (videoRef.current) videoRef.current.pause();
    }
  }, [isActive, data.type]);

  const textColorClass = data.textColor === 'white' ? 'text-white' : (data.textColor === 'green' ? 'text-brand-green' : 'text-brand-black');
  const sublineColorClass = data.textColor === 'white' ? 'text-white/60' : 'text-brand-black/50';
  const isDark = data.textColor === 'white';

  const renderContent = () => {
    switch (data.type) {
      case 'seed-round':
        return (
          <div className="relative flex flex-col items-center justify-center w-full h-full max-w-4xl px-6 md:px-12 text-center">
            {/* Persistent Top Title - Style matched to others */}
            {data.topTitle && (
              <div className={`absolute top-[12vh] transition-all duration-1000 ease-out z-40 ${stage > 0 ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <p className={`font-serif italic text-xl md:text-2xl font-normal text-center ${textColorClass}`}>{data.topTitle}</p>
              </div>
            )}

            {/* Content Container - Better mobile spacing */}
            <div className={`flex flex-col items-center transition-all duration-[1500ms] ${stage > 0 ? 'opacity-100 translate-y-[-2vh]' : 'opacity-0 translate-y-8'}`}>
              
              {/* Primary Headline */}
              <h1 className={`font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-6 ${textColorClass} tracking-tight`}>
                {data.headline.split('\n')[0]}
              </h1>

              {/* Secondary Emphasis Headline */}
              <h2 className="font-serif italic text-xl sm:text-2xl md:text-4xl text-brand-gold mb-8 md:mb-12 opacity-90 leading-tight">
                {data.headline.split('\n')[1]}
              </h2>
              
              {/* Divider Line */}
              <div className="w-12 h-[1px] bg-brand-gold/30 mb-8 md:mb-12" />

              {/* Description Body Text */}
              <p className={`text-base sm:text-lg md:text-2xl font-light max-w-2xl mx-auto mb-16 md:mb-20 ${sublineColorClass} leading-[1.6]`}>
                {data.subline}
              </p>

              {/* Gently Flickering CTA Button */}
              <div className={`transition-all duration-1000 delay-1000 ${stage > 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button 
                    className="relative px-10 py-5 border border-brand-gold/40 rounded-full font-serif italic text-lg md:text-xl text-brand-gold transition-all duration-500 hover:bg-brand-gold/10 hover:border-brand-gold backdrop-blur-sm"
                    style={{ animation: 'button-flicker 5s ease-in-out infinite' }}
                  >
                    will reach out soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vision-reality':
        return (
          <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl px-8 text-center">
            {/* Breadcrumb Header - Same content as previous slide but moved to top */}
            <div className={`absolute top-[8vh] sm:top-[12vh] transition-all duration-[1200ms] ease-out z-40 flex flex-col items-center gap-2 ${stage > 0 ? 'opacity-30 translate-y-0 scale-75' : 'opacity-0 translate-y-24 scale-100'}`}>
               <h2 className={`font-serif text-2xl md:text-4xl lg:text-5xl font-bold ${textColorClass}`}>{data.topTitle}</h2>
               {data.customData?.topSubline && (
                 <p className={`text-base md:text-xl font-light ${sublineColorClass}`}>{data.customData.topSubline}</p>
               )}
            </div>

            {/* Main Vision Paragraph - Elegant, center-aligned serif */}
            <div className={`max-w-4xl transition-all duration-[1500ms] delay-500 ${stage > 0 ? 'opacity-100 translate-y-[-4vh]' : 'opacity-0 translate-y-12'}`}>
               <p className={`font-serif text-xl md:text-3xl lg:text-4xl leading-[1.6] md:leading-[1.7] ${textColorClass} tracking-tight`}>
                  {data.headline}
               </p>
            </div>

            {/* Bottom transition subline - Small serif footer */}
            <div className={`absolute bottom-[10vh] sm:bottom-[15vh] transition-all duration-1000 delay-[1000ms] ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <p className={`font-serif text-sm md:text-lg italic opacity-50 ${textColorClass}`}>{data.subline}</p>
            </div>
          </div>
        );
      case 'hardware-timeline':
        return (
          <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 sm:px-8 text-center overflow-hidden">
            {data.topTitle && (
              <div className={`absolute top-12 sm:top-16 transition-all duration-1000 ease-out z-40 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <p className={`font-serif italic text-lg sm:text-2xl font-normal text-center ${textColorClass}`}>{data.topTitle}</p>
              </div>
            )}
            
            <div className="flex flex-col items-center justify-center h-full pt-24 pb-32">
              <div className={`max-w-xs sm:max-w-2xl lg:max-w-4xl mb-8 sm:mb-20 transition-all duration-1000 delay-500 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className={`text-base sm:text-xl md:text-3xl font-light leading-relaxed ${textColorClass}`}>
                  {data.bodyText}
                </p>
              </div>

              {/* Infographic Timeline */}
              <div className="relative w-full max-w-4xl mt-4 sm:mt-12 py-12 sm:py-16 px-2 sm:px-0">
                {/* Horizontal Track */}
                <div className={`absolute top-1/2 left-0 w-full h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'} -translate-y-1/2`} />
                <div 
                  className={`absolute top-1/2 left-0 h-[2px] bg-brand-gold -translate-y-1/2 transition-all duration-[2000ms] delay-[1200ms] ease-in-out`}
                  style={{ width: stage > 1 ? '100%' : '0%' }}
                />

                <div className="relative flex justify-between items-center w-full">
                  {data.customData?.timeline?.map((item: any, idx: number) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      {/* Node */}
                      <div 
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-700 relative z-10 ${
                          stage > 1 ? 'bg-brand-gold border-brand-gold scale-100' : 'bg-transparent border-white/20 scale-50'
                        } ${item.isMilestone ? 'ring-2 sm:ring-4 ring-brand-gold/20' : ''}`}
                        style={{ transitionDelay: `${1200 + idx * 300}ms` }}
                      >
                        {item.isMilestone && (
                          <div className="absolute inset-[-6px] sm:inset-[-8px] border border-brand-gold/40 rounded-full animate-ping opacity-20" />
                        )}
                      </div>

                      {/* Date (Top) */}
                      <div 
                        className={`absolute bottom-full mb-4 sm:mb-6 whitespace-nowrap transition-all duration-700 ${
                          stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${1400 + idx * 300}ms` }}
                      >
                        <span className={`text-[8px] sm:text-xs md:text-sm font-sans uppercase tracking-widest font-bold opacity-40 ${textColorClass}`}>{item.date}</span>
                      </div>

                      {/* Label (Bottom) */}
                      <div 
                        className={`absolute top-full mt-4 sm:mt-6 whitespace-nowrap transition-all duration-700 ${
                          stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-12px] sm:translate-y-[-16px]'
                        }`}
                        style={{ transitionDelay: `${1600 + idx * 300}ms` }}
                      >
                        <p className={`font-serif italic text-xs sm:text-lg md:text-2xl ${item.isMilestone ? 'text-brand-gold' : textColorClass}`}>{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom label - Hardware Roadmap in Gold */}
              <div className={`mt-16 sm:mt-24 transition-all duration-1000 delay-[3000ms] ${stage > 1 ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-brand-gold">Hardware Roadmap</p>
              </div>
            </div>
          </div>
        );
      case 'bubble-comparison':
        return (
          <div className="relative w-full h-full max-w-[1500px] px-4 md:px-12 flex flex-col items-center">
            {data.topTitle && (
              <div className={`absolute top-[4.5rem] md:top-[6.5rem] transition-all duration-1000 ease-out z-40 ${stage > 0 ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className={`font-serif italic text-lg sm:text-2xl font-normal text-center leading-relaxed ${textColorClass}`}>
                  {data.topTitle.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            )}
            
            <div className="absolute top-[22vh] h-[35vh] w-full flex flex-row items-center justify-between gap-4 md:gap-0 px-2 sm:px-8 md:px-16 lg:px-24">
              <div 
                className={`flex-1 flex items-center justify-center px-4 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-20 md:py-24 lg:py-32 border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-[1500ms] ease-out ${stage > 1 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-90'}`}
                style={{ 
                  animation: isActive ? 'bubble-float-1 9s ease-in-out infinite, morph-blob-1 15s ease-in-out infinite' : 'none',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                  transform: stage > 1 ? 'translateY(-30px)' : 'none' 
                }}
              >
                <p className="font-serif text-sm sm:text-xl md:text-3xl lg:text-4xl text-white text-center leading-[1.1] tracking-tight relative z-10">
                  Independent<br/>watchmaking<br/>excellence
                </p>
              </div>

              <div 
                className={`flex-1 flex items-center justify-center px-4 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-20 md:py-24 lg:py-32 border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-[1500ms] ease-out delay-500 ${stage > 1 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-90'}`}
                style={{ 
                  animation: isActive ? 'bubble-float-2 10s ease-in-out infinite, morph-blob-2 18s ease-in-out infinite' : 'none',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                  transform: stage > 1 ? 'translateY(30px)' : 'none' 
                }}
              >
                <p className="font-serif text-sm sm:text-xl md:text-3xl lg:text-4xl text-white text-center leading-[1.2] tracking-tight relative z-10">
                  Global luxury<br/>at scale
                </p>
              </div>
            </div>

            <div className="absolute top-[68vh] w-full px-4 text-center">
              <div className="relative flex flex-col items-center">
                <div className={`w-20 h-[1px] bg-brand-gold mb-6 md:mb-10 transition-all duration-[1500ms] delay-700 ${stage > 2 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
                <div className="flex flex-col items-center gap-2">
                  {data.subline?.split('\n').map((line, i) => (
                    <div key={i} className="overflow-hidden py-1">
                      <p 
                        className="font-serif italic text-2xl md:text-4xl text-brand-gold px-4 max-w-2xl mx-auto"
                        style={{ 
                          animation: stage > 2 ? 'cool-text-reveal 2s cubic-bezier(0.19, 1, 0.22, 1) forwards' : 'none',
                          animationDelay: `${i * 300}ms`,
                          opacity: 0,
                          textShadow: '0 0 20px rgba(194, 181, 155, 0.4)'
                        }}
                      >
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'market-expansion':
        return (
          <div className="relative flex flex-col items-center justify-center w-full h-full max-w-7xl px-8 text-center overflow-hidden">
            <div className={`absolute top-[10%] md:top-[8%] w-full max-w-2xl px-4 z-20 transition-all duration-1000 ${stage > 0 ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
              <h1 className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 ${textColorClass}`}>{data.headline}</h1>
              <p className={`text-base md:text-xl lg:text-2xl font-light max-w-xl mx-auto ${sublineColorClass}`}>{data.subline}</p>
            </div>
            
            <div className="relative flex flex-col items-center justify-center w-full mt-24 z-10">
               <div className={`absolute transition-all duration-[3000ms] ease-out rounded-full bg-brand-gold/10 blur-[100px] ${stage > 1 ? 'scale-[20] opacity-100' : 'scale-0 opacity-0'}`} style={{ width: '40px', height: '40px' }} />
               
               <div className="relative z-20 flex flex-col items-center w-full">
                  <div className={`font-serif text-[8rem] md:text-[14rem] lg:text-[18rem] leading-none tracking-tighter transition-all duration-1000 mb-8 md:mb-12 flex items-center justify-center ${stage > 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} ${textColorClass}`}>
                    <span className="mr-[-0.05em] font-serif text-brand-gold opacity-80" style={{ textShadow: '0 0 40px rgba(194, 181, 155, 0.3)' }}>$</span>
                    <span style={{ textShadow: '0 0 60px rgba(255, 255, 255, 0.1)' }}>{marketNum}</span>
                    <span className="text-brand-gold opacity-80" style={{ textShadow: '0 0 40px rgba(194, 181, 155, 0.3)' }}>B</span>
                  </div>
                  
                  <div className="flex flex-row items-start justify-center gap-6 md:gap-16 w-full max-w-6xl px-4">
                    <div className={`flex-1 flex flex-col transition-all duration-1000 delay-500 text-right ${stage > 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-white`}>
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold mb-4 opacity-40">The Start</span>
                      <div className="h-16 md:h-24 flex items-center justify-end">
                        <p className="text-sm md:text-2xl font-serif italic leading-snug">Anti-theft for<br/>luxury watches</p>
                      </div>
                      <div className="mt-6 md:mt-8 font-serif text-3xl md:text-6xl lg:text-7xl text-brand-gold">$1B</div>
                    </div>
                    
                    <div className={`flex-none mt-12 md:mt-24 flex items-center justify-center transition-all duration-1000 delay-700 ${stage > 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} text-white`}>
                      <svg width="64" height="32" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 md:w-20 lg:w-24 opacity-30"><path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    
                    <div className={`flex-1 flex flex-col transition-all duration-1000 text-left ${marketNum >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} text-white`}>
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold mb-4 opacity-40">The Opportunity</span>
                      <div className="h-16 md:h-24 flex items-center justify-start">
                        <p className="text-sm md:text-2xl font-serif italic leading-snug">Luxury anti-theft +<br/>DPPs + Authentication</p>
                      </div>
                      <div className="mt-6 md:mt-8 font-serif text-3xl md:text-6xl lg:text-7xl text-brand-gold">$10B</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'intro':
        return (
          <div className="flex flex-col items-center text-center px-6 max-w-7xl">
            <h1 className={`font-serif text-4xl md:text-6xl tracking-tight leading-tight mb-10 transform transition-all duration-[1500ms] ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-0'} ${textColorClass}`}>{data.headline}</h1>
            <p className={`font-sans text-xl md:text-3xl font-medium tracking-[0.3em] uppercase transition-all duration-1000 delay-700 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${sublineColorClass}`}>{data.subline}</p>
          </div>
        );
      case 'video':
        const videoUrl = (data.id === 19 && assets?.RD_VIDEO_URL) ? assets.RD_VIDEO_URL : data.customData?.videoUrl;
        return (
          <div className="flex flex-col items-center w-full max-w-6xl">
            <div className={`relative w-full aspect-video md:w-3/4 mb-12 overflow-hidden transition-all duration-[1.5s] border border-white/5 shadow-2xl ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
              <div className="absolute inset-0 border border-brand-gold/20 pointer-events-none z-10" />
              <video ref={videoRef} className="w-full h-full object-cover opacity-80" src={videoUrl} muted loop playsInline />
            </div>
            <div className="text-center">
              <h1 className={`font-serif text-4xl md:text-6xl leading-tight mb-4 ${textColorClass}`}>{data.headline}</h1>
              <p className={`text-xl md:text-2xl font-light transition-all duration-1000 delay-700 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${sublineColorClass}`}>{data.subline}</p>
            </div>
          </div>
        );
      case 'technical-schematic':
        return (
          <div className="relative flex flex-col items-center w-full h-full max-w-6xl pt-20 px-6 overflow-hidden">
            {data.topTitle && (
              <div className={`absolute top-12 sm:top-16 transition-all duration-1000 ease-out z-40 ${stage > 0 ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <p className={`font-serif italic text-lg sm:text-2xl font-normal text-center ${textColorClass}`}>{data.topTitle}</p>
              </div>
            )}
            <div className="flex flex-col items-center justify-center flex-1 w-full gap-12 sm:gap-16 relative z-30 pb-20 sm:pb-32">
              <div className={`text-center space-y-4 transition-all duration-1000 delay-200 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className={`font-serif text-3xl sm:text-4xl md:text-6xl leading-tight font-bold ${textColorClass}`}>{data.headline}</h2>
                <p className={`text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-xl mx-auto leading-relaxed ${textColorClass}`}>{data.subline}</p>
              </div>
              {data.customData?.headline2 && (
                <div className={`text-center space-y-4 transition-all duration-1000 delay-700 relative z-40 ${stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <h2 className={`font-serif text-3xl sm:text-4xl md:text-6xl leading-tight font-bold ${textColorClass}`}>{data.customData.headline2}</h2>
                  <p className={`text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-xl mx-auto leading-relaxed ${textColorClass}`}>{data.customData.subline2}</p>
                </div>
              )}
              {data.customData?.headline3 && (
                <div className={`text-center space-y-4 transition-all duration-1000 relative z-40 ${stage > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '1200ms' }}>
                  <h2 className={`font-serif text-3xl sm:text-4xl md:text-6xl leading-tight font-bold ${textColorClass}`}>{data.customData.headline3}</h2>
                  <p className={`text-base sm:text-xl md:text-2xl max-w-xs sm:max-w-xl mx-auto leading-relaxed ${textColorClass}`}>{data.customData.subline3}</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'layered-reveal':
        return (
          <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`absolute w-full h-32 md:h-48 transition-all duration-[2000ms] border-y border-black/[0.03] ${stage > 0 ? 'opacity-100' : 'opacity-0'}`} 
                  style={{ 
                    top: `calc(50% + ${(i - 2.5) * 120}px)`,
                    left: 0,
                    transform: stage > 0 ? `translateX(0) rotate(${(i - 2.5) * 1.5}deg)` : `translateX(${i % 2 === 0 ? '-100%' : '100%'}) scale(0.95)`, 
                    backgroundColor: i % 2 === 0 ? 'rgba(194, 181, 155, 0.05)' : 'transparent', 
                    transitionDelay: `${i * 150}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
                  }} 
                />
              ))}
            </div>
            <div className="relative z-10 text-center max-w-5xl px-8">
              <div className="overflow-visible">
                <h1 
                  className={`font-serif text-4xl md:text-7xl leading-tight mb-10 ${textColorClass} block w-full`}
                  style={{ 
                    animation: isActive ? 'cool-text-reveal 2.2s cubic-bezier(0.19, 1, 0.22, 1) forwards' : 'none',
                    animationDelay: '600ms',
                    opacity: 0,
                    willChange: 'transform, opacity, filter'
                  }}
                >
                  {data.headline}
                </h1>
              </div>
              <p className={`text-xl md:text-3xl font-light transition-all duration-[1500ms] delay-[1200ms] ${stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${sublineColorClass}`}>
                {data.subline}
              </p>
            </div>
          </div>
        );
      case 'reveal-scroll':
        return (
          <div className="flex flex-col items-center w-full h-full relative">
            {data.topTitle && (
              <div className={`absolute top-12 sm:top-16 transition-all duration-1000 ease-out z-40 ${stage > 0 ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <p className={`font-serif italic text-lg sm:text-2xl font-normal text-center ${textColorClass}`}>{data.topTitle}</p>
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full max-w-5xl px-6 text-center">
              {data.id === 2 ? (
                <>
                  <div className="flex flex-col items-center mb-1">
                    <h1 className={`font-serif text-4xl md:text-7xl leading-none mb-2 ${textColorClass}`}>{data.headline}</h1>
                    <p className={`text-xl md:text-3xl font-light transition-all duration-1000 ${stage > 0 ? 'opacity-100' : 'opacity-0'} ${sublineColorClass}`}>{data.subline}</p>
                  </div>
                  <div className={`mt-24 md:mt-48 max-w-2xl text-center transition-all duration-[1.5s] ${stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <p className={`font-serif italic text-lg md:text-2xl leading-relaxed ${textColorClass} opacity-80`}>{data.bodyText}</p>
                  </div>
                </>
              ) : (
                <>
                  <h1 className={`font-serif text-4xl md:text-7xl leading-tight mb-8 ${textColorClass}`}>{data.headline}</h1>
                  <div className={`text-xl md:text-3xl font-light transition-all duration-1000 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${sublineColorClass}`}>
                    {data.subline?.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
                  </div>
                </>
              )}
            </div>
            {data.disclaimer && (
              <div className={`absolute bottom-24 transition-all duration-1000 delay-1000 ${stage > 0 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-[10px] md:text-xs font-medium text-[#8b0000] tracking-wider uppercase text-center px-4">{data.disclaimer}</p>
              </div>
            )}
          </div>
        );
      case 'numeric':
        const scaleItems = ['2', '4', '6', '8', '10', '12', '14', '15+'];
        return (
          <div className="flex flex-col items-center w-full h-full justify-center px-4">
            <h2 className={`text-[10px] uppercase tracking-[0.5em] mb-12 md:mb-16 font-bold opacity-30 ${textColorClass}`}>
              {data.headline}
            </h2>
            
            <div className="relative w-full max-w-md h-[45vh] md:h-[55vh] flex flex-col items-center">
              <div className={`absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'} origin-top transition-transform duration-[1500ms] ${stage > 0 ? 'scale-y-100' : 'scale-y-0'}`} />
              
              <div className="relative w-full h-full flex flex-col justify-between py-2">
                {scaleItems.map((item, idx) => {
                  const isStart = item === '2';
                  const isEnd = item === '15+';
                  
                  let itemStyle = 'opacity-20 scale-100';
                  if (stage === 1 && isStart) itemStyle = 'opacity-100 scale-[2] md:scale-[2.5] z-20';
                  if (stage === 2) itemStyle = 'opacity-100 scale-105';
                  if (stage === 3) {
                    if (isEnd) itemStyle = 'opacity-100 scale-[2.5] md:scale-[3.5] z-30';
                    else itemStyle = 'opacity-10 scale-90';
                  }

                  return (
                    <div key={idx} className="relative z-10 flex justify-center items-center h-8">
                      <div 
                        className={`transition-all duration-[800ms] font-serif ${textColorClass} ${itemStyle} relative`} 
                        style={{ transitionDelay: stage === 2 ? `${idx * 120}ms` : '0ms' }}
                      >
                        {isStart && (
                          <span className="absolute right-full mr-4 text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-sans font-bold opacity-40 top-1/2 -translate-y-1/2 whitespace-nowrap">
                            from
                          </span>
                        )}
                        <span className="text-2xl sm:text-3xl md:text-5xl block">{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className={`text-lg md:text-3xl font-light mt-16 md:mt-24 transition-all duration-1000 ${
              stage > 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${sublineColorClass} text-center max-w-2xl leading-relaxed`}>
              {data.subline}
            </p>
          </div>
        );
      case 'brand-list':
        const allBrands = data.customData.brands || [];
        const midPoint = Math.ceil(allBrands.length / 2);
        const list1 = allBrands.slice(0, midPoint);
        const list2 = allBrands.slice(midPoint);
        
        const ticker1 = list1.join('  •  ');
        const ticker2 = list2.join('  •  ');
        
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <h1 className={`absolute top-24 font-serif text-3xl md:text-6xl text-center px-4 transition-all duration-1000 ${stage > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${textColorClass}`}>
              {data.headline}
            </h1>
            
            <div className="relative w-full h-64 md:h-96 flex flex-col items-center justify-center gap-12 md:gap-20">
              <div 
                className={`w-[150%] md:w-[120%] py-3 md:py-6 bg-brand-gold/5 border-y border-black/5 rotate-[3deg] transition-all duration-[2000ms] ease-out ${stage > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="flex whitespace-nowrap" style={{ animation: `marquee 25s linear infinite` }}>
                  <div className="flex shrink-0 px-4">
                    <span className="font-serif text-brand-gold text-lg md:text-3xl tracking-tight uppercase px-4">{ticker1}  •  {ticker1}  •  </span>
                  </div>
                  <div className="flex shrink-0 px-4">
                    <span className="font-serif text-brand-gold text-lg md:text-3xl tracking-tight uppercase px-4">{ticker1}  •  {ticker1}  •  </span>
                  </div>
                </div>
              </div>

              <div 
                className={`w-[150%] md:w-[120%] py-3 md:py-6 bg-brand-gold/5 border-y border-black/5 -rotate-[3deg] transition-all duration-[2000ms] ease-out delay-500 ${stage > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="flex whitespace-nowrap" style={{ animation: `marquee-reverse 22s linear infinite` }}>
                  <div className="flex shrink-0 px-4">
                    <span className="font-serif text-brand-gold text-lg md:text-3xl tracking-tight uppercase px-4">{ticker2}  •  {ticker2}  •  </span>
                  </div>
                  <div className="flex shrink-0 px-4">
                    <span className="font-serif text-brand-gold text-lg md:text-3xl tracking-tight uppercase px-4">{ticker2}  •  {ticker2}  •  </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute bottom-24 italic text-lg md:text-2xl transition-all duration-1000 delay-1000 ${stage > 1 ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-4'} ${textColorClass}`}>
              …and more
            </div>
          </div>
        );
      case 'morph':
        return (
          <div className="flex flex-col items-center">
            <div className="relative h-24 md:h-40 flex items-center justify-center w-full">
              <h1 className={`font-serif text-5xl md:text-9xl absolute transition-all duration-1000 ${stage === 0 ? 'opacity-100' : 'opacity-0 blur-xl scale-110'} ${textColorClass}`}>WatchWell</h1>
              <h1 className={`font-serif text-5xl md:text-9xl absolute transition-all duration-1000 ${stage > 0 ? 'opacity-100' : 'opacity-0 blur-xl scale-90'} ${textColorClass}`}>Kairos</h1>
            </div>
            <p className={`text-xl md:text-2xl font-light mt-16 transition-all duration-1000 delay-500 ${stage > 0 ? 'opacity-100' : 'opacity-0'} ${sublineColorClass}`}>{data.subline}</p>
          </div>
        );
      case 'cta':
        return (
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-7xl font-serif mb-16 leading-tight">Let’s continue the conversation.</h1>
            <div className="flex flex-col items-center gap-10">
              <a href={`mailto:${data.subline}`} className="text-2xl md:text-4xl font-light border-b border-black/10 pb-2 hover:border-black transition-all">{data.subline}</a>
              <button 
                onClick={() => onAction?.('OPEN_REPORT')}
                className="mt-8 group flex items-center gap-4 text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
              >
                Read the full 2025 investor update<span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
              </button>
            </div>
          </div>
        );
      case 'standard':
      default:
        const isExecutionSlide = data.id === 18;
        const isPlatformSlide = data.id === 20;
        const is2026Slide = data.id === 23;

        const headlineClass = is2026Slide 
          ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-gold font-bold" 
          : (isExecutionSlide ? 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight' :
            isPlatformSlide ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight' :
            'text-2xl md:text-7xl');

        return (
          <div className={`w-full h-full flex flex-col items-center text-center relative z-20 overflow-hidden ${isExecutionSlide || isPlatformSlide ? 'justify-start pt-24 sm:pt-32 pb-32 md:pb-48' : 'justify-center'}`}>
            <div className={`max-w-5xl px-8 transition-all duration-[1200ms] ${
              isExecutionSlide ? 'mb-10 sm:mb-16' : 
              isPlatformSlide ? 'mb-8 sm:mb-12' : 
              'flex flex-col items-center justify-center'
            }`}>
              <h1 className={`font-serif leading-tight mb-6 sm:mb-10 ${headlineClass} ${!is2026Slide ? textColorClass : ''} transition-all duration-[1500ms] ${isActive ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-[0.98]'}`}>
                {data.headline.split('\n').map((line, i) => (
                  <span key={i} className={`block ${(!isExecutionSlide && !isPlatformSlide) ? 'whitespace-nowrap' : ''}`}>
                    {is2026Slide && line.includes('2026') ? (
                      <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] mb-4 block leading-none">{line}</span>
                    ) : line}
                  </span>
                ))}
              </h1>
              {data.subline && (
                <p className={`text-base sm:text-lg md:text-2xl font-light max-w-3xl sm:max-w-4xl mx-auto leading-relaxed ${sublineColorClass} transition-all duration-[1200ms] delay-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  {data.subline}
                </p>
              )}
            </div>

            {isExecutionSlide && (
              <div className={`relative flex flex-col items-center justify-center w-full px-4 transition-all duration-[2000ms] delay-1000 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}>
                <div className="relative flex items-center justify-center w-full max-w-[260px] sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <div 
                    className="absolute w-24 h-24 sm:w-48 sm:h-48 bg-white/60 rounded-full blur-[30px] pointer-events-none z-0"
                    style={{ animation: isActive ? 'refined-glow 4s ease-in-out infinite' : 'none' }}
                  />
                  <div 
                    className="absolute w-32 h-32 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-[60px] pointer-events-none z-0"
                    style={{ animation: isActive ? 'refined-glow 6s ease-in-out infinite reverse' : 'none' }}
                  />
                  
                  <div className="relative z-10 w-full aspect-square flex items-center justify-center p-2">
                    <img 
                      src="https://i.postimg.cc/PrFghRjw/Untitled-(1080-x-1080-px).png" 
                      alt="Hardware Execution" 
                      className="w-full h-full object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                </div>
                
                <div className={`mt-4 md:mt-6 transition-all duration-[1200ms] delay-[1800ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-1">Ultra-thin Hardware Tracker Board</p>
                  <p className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-light tracking-[0.3em] uppercase italic">In production now</p>
                </div>
              </div>
            )}

            {isPlatformSlide && data.bgImage && (
              <div className={`mt-auto mb-8 sm:mb-12 w-full flex-1 flex items-center justify-center transition-all duration-[2000ms] delay-1000 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-95'}`}>
                 <div className="relative w-full h-full max-h-[45vh] md:max-h-[50vh] px-4">
                    <div className="relative inline-block h-full">
                      <img 
                        src={data.bgImage} 
                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
                        alt="Platform Visualization" 
                      />
                    </div>
                 </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <section className="story-slide transition-colors duration-1000 ease-in-out" style={{ backgroundColor: data.bgColor }}>
      {isValidationSequence && <ValidationBackground isActive={isActive} />}
      {data.bgImage && data.id !== 20 && (
        <div className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <img src={data.bgImage} alt={data.bgImageAlt || "Background"} className="w-full h-full object-cover" />
          {data.id === 3 && <div className="absolute inset-0 bg-white/60 z-[1]" />}
        </div>
      )}
      <div className={`relative z-10 w-full h-full transition-all duration-1000 ease-out transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex items-center justify-center w-full h-full">
          {!isSequenceMember && renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Slide;
