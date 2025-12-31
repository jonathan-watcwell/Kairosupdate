
import { SlideData } from './types';

export const COLORS = {
  GREEN: '#365850',
  WHITE: '#ede7e1',
  BLACK: '#000000',
  GOLD: '#c2b59b',
};

export const THEMES: string[] = ['Intro', 'Market', 'Commercial', 'R&D', '2026', 'Closing'];

export const STORY_DATA: SlideData[] = [
  // INTRO
  { 
    id: 1, 
    theme: 'Intro', 
    type: 'intro', 
    headline: 'WatchWell - Year One.', 
    subline: '2025 wrapped', 
    bgColor: '#000000', 
    textColor: 'white', 
    bgImage: 'https://i.postimg.cc/CxDXHTgg/Background-Diamond-Outline-1080x1350-Black-(2).gif',
    bgImageAlt: 'Black diamond outline background animation'
  },
  { 
    id: 2, 
    theme: 'Intro', 
    type: 'reveal-scroll', 
    headline: '12 months.', 
    subline: 'From concept to execution.', 
    bodyText: 'In October, we marked WatchWell’s first anniversary. With 2025 closing, it’s a good moment to step back, look at the progress made so far, and outline where we’re heading in 2026',
    bgColor: '#ede7e1', 
    textColor: 'black',
    bgImage: 'https://i.postimg.cc/nhhWQjhY/Background-Diamond-Outline-1080x1350-Ivory-(1).gif',
    bgImageAlt: 'Ivory diamond outline background animation'
  },
  { 
    id: 3, 
    theme: 'Intro', 
    type: 'technical-schematic', 
    topTitle: 'Quick snapshot',
    headline: 'What WatchWell builds', 
    subline: 'Ultra-miniaturized tracking and authentication device for high-value luxury items', 
    customData: {
      headline2: '2025 Focus',
      subline2: 'We entered 2025 only two months after incorporation. The focus this year was deliberate: move from concept into validated technology, concrete pilots, and serious engagement with top-tier luxury partners.'
    },
    bgColor: '#ede7e1', 
    textColor: 'black',
    bgImage: 'https://i.postimg.cc/6pjvfhk7/Watch-Well-old-animation.gif',
    bgImageAlt: 'WatchWell product schematic animation'
  },
  
  // MARKET
  { 
    id: 4, 
    theme: 'Market', 
    type: 'standard', 
    headline: 'What started as theft recovery\nbecame something larger', 
    subline: 'it has become clear that WatchWell addresses a significantly broader set of needs than theft detection and recovery alone.', 
    customData: {
      subline2: 'In discussions with maisons, our technology consistently maps to four high-priority problem areas...'
    },
    bgColor: '#ede7e1', 
    textColor: 'black',
    bgImage: 'https://i.postimg.cc/Gp9QJVVk/Background-1080x1350-Sandstone.png',
    bgImageAlt: 'Sandstone background texture'
  },
  
  // MARKET NEEDS - ACCUMULATING
  { id: 6, theme: 'Market', type: 'market-needs', headline: 'Across maisons, the same needs surfaced.', bgColor: '#365850', textColor: 'white', customData: { revealedCount: 0 } },
  { id: 7, theme: 'Market', type: 'market-needs', headline: 'Across maisons, the same needs surfaced.', bgColor: '#365850', textColor: 'white', customData: { revealedCount: 1 } },
  { id: 8, theme: 'Market', type: 'market-needs', headline: 'Across maisons, the same needs surfaced.', bgColor: '#365850', textColor: 'white', customData: { revealedCount: 2 } },
  { id: 9, theme: 'Market', type: 'market-needs', headline: 'Across maisons, the same needs surfaced.', bgColor: '#365850', textColor: 'white', customData: { revealedCount: 3 } },
  { id: 10, theme: 'Market', type: 'market-needs', headline: 'Across maisons, the same needs surfaced.', bgColor: '#365850', textColor: 'white', customData: { revealedCount: 4 } },
  
  { 
    id: 11, 
    theme: 'Market', 
    type: 'market-expansion', 
    headline: 'This changed the scale of the opportunity', 
    subline: 'And the strategic importance of the platform inside luxury organizations.', 
    bgColor: '#365850', 
    textColor: 'white',
    bgImage: 'https://i.postimg.cc/zvBTwk1k/Slide10background.gif',
    bgImageAlt: 'Deep green diamond background'
  },
  
  // COMMERCIAL - PARTNER REVEAL SEQUENCE
  { 
    id: 12, 
    theme: 'Commercial', 
    type: 'partner-reveal', 
    topTitle: 'Traction',
    headline: 'Validation followed.', 
    subline: 'Two heritage maisons.\nContracts in motion', 
    disclaimer: '*Both under strict NDA - do not share',
    bgColor: '#000000', 
    textColor: 'white',
    customData: { revealedCount: 0 }
  },
  { 
    id: 121, 
    theme: 'Commercial', 
    type: 'partner-reveal', 
    topTitle: 'Traction',
    headline: 'Validation followed.', 
    subline: 'Two heritage maisons.\nContracts in motion', 
    disclaimer: '*Both under strict NDA - do not share',
    bgColor: '#000000', 
    textColor: 'white',
    customData: { revealedCount: 1 }
  },
  { 
    id: 122, 
    theme: 'Commercial', 
    type: 'partner-reveal', 
    topTitle: 'Traction',
    headline: 'Validation followed.', 
    subline: 'Two heritage maisons.\nContracts in motion', 
    disclaimer: '*Both under strict NDA - do not share',
    bgColor: '#000000', 
    textColor: 'white',
    customData: { revealedCount: 2 }
  },

  { 
    id: 13, 
    theme: 'Commercial', 
    type: 'bubble-comparison', 
    topTitle: 'One signing imminent.\nOne targeted for Q1 2026',
    headline: 'Independent watchmaking excellence.\nGlobal luxury at scale.', 
    subline: 'Different categories.\nSame conclusion', 
    bgColor: '#000000', 
    textColor: 'white' 
  },
  
  { 
    id: 14, 
    theme: 'Commercial', 
    type: 'numeric', 
    headline: 'Pipeline growth.', 
    subline: 'Global Luxury Brands engaged in 2025', 
    bgColor: '#c2b59b', 
    textColor: 'black', 
    customData: { from: '2', to: '15+' } 
  },
  { 
    id: 15, 
    theme: 'Commercial', 
    type: 'brand-list', 
    headline: 'The caliber matters.', 
    subline: '', 
    bgColor: '#ede7e1', 
    textColor: 'black', 
    customData: { 
      brands: [
        'Chanel', 'Hermès', 'Loro Piana', 'Patek Philippe', 
        'F.P. Journe', 'Vacheron Constantin', 'Jaeger-LeCoultre', 
        'Richemont', 'Akrivia', 'Bottega Veneta'
      ] 
    } 
  },
  { 
    id: 16, 
    theme: 'Commercial', 
    type: 'layered-reveal', 
    headline: 'These are not small deployments', 
    subline: 'Each brand represents billions in revenue and hundreds to thousands of points of sale.', 
    bgColor: '#ede7e1', 
    textColor: 'green' 
  },
  
  // R&D
  { 
    id: 17, 
    theme: 'R&D', 
    type: 'hardware-timeline', 
    topTitle: 'From "If" to "How"', 
    headline: '', 
    bodyText: 'This year we moved WatchWell from a feasibility question into a scalable product direction with clear near-term proof point, we validated an ultra-thin, manufacturable path and are on track for a demo-ready device by mid-February',
    bgColor: '#365850', 
    textColor: 'white',
    customData: {
      timeline: [
        { date: 'Jan 15', label: 'Production' },
        { date: 'Jan 25', label: 'IL arrival' },
        { date: 'Feb 5', label: 'Assembly' },
        { date: 'Feb 15', label: 'Tests' },
        { date: 'Feb 15+', label: 'Demo-ready', isMilestone: true }
      ]
    }
  },
  { 
    id: 18, 
    theme: 'R&D', 
    type: 'standard', 
    headline: 'Execution outpaced the category norm', 
    subline: 'a pace that’s typically measured in multiple years in the chip development sector', 
    bgColor: '#365850', 
    textColor: 'white' 
  },
  { 
    id: 20, 
    theme: 'R&D', 
    type: 'standard', 
    headline: 'Hardware alone isn’t the product', 
    subline: 'In parallel, we built the secure-by-design platform that makes the device valuable at scale: fleet monitoring with minimal operational overhead (aiming for “no human in the loop”), and end-to-end security from pairing through ongoing monitoring.', 
    bgColor: '#000000', 
    textColor: 'white',
    bgImage: 'https://i.postimg.cc/Wp5P57XX/Untitled-design.gif'
  },
  
  // 2026
  { 
    id: 23, 
    theme: '2026', 
    type: 'standard', 
    headline: '2026\nis about scaling execution', 
    subline: 'Not redefining direction.', 
    bgColor: '#ede7e1', 
    textColor: 'black',
    bgImage: 'https://i.postimg.cc/TY24hLvR/Untitled-design-(2).gif',
    bgImageAlt: '2026 Execution Background'
  },
  { 
    id: 231, 
    theme: '2026', 
    type: 'vision-reality', 
    topTitle: '2026 is about scaling execution',
    headline: 'Step by step, we’re translating the vision into reality: a security and trust standard for luxury objects, starting with watches and extending into adjacent categories - safeguarding not just items, but the heritage and integrity of the brands behind them.', 
    subline: "So here’s what’s in store for 2026…", 
    bgColor: '#ede7e1', 
    textColor: 'black',
    bgImage: 'https://i.postimg.cc/TY24hLvR/Untitled-design-(2).gif',
    bgImageAlt: '2026 Vision Background',
    customData: {
      topSubline: 'Not redefining direction.'
    }
  },
  
  // 2026 PRIORITIES
  { 
    id: 24, 
    theme: '2026', 
    type: 'market-needs', 
    topTitle: 'R&D 2026',
    headline: 'Future R&D Roadmap: Scaling & Expansion', 
    bgColor: '#ede7e1', 
    textColor: 'black', 
    customData: { 
      items: [
        'Pushing thickness toward <0.5mm', 
        'Maximizing battery and system efficiency', 
        'Scaling maison-specific integrations', 
        'Platform expansion (DPP, Ownership, insurer/authority integrations)'
      ], 
      revealedCount: 0,
      showRDAnimation: false
    } 
  },
  { 
    id: 25, 
    theme: '2026', 
    type: 'market-needs', 
    topTitle: 'R&D 2026',
    headline: 'Future R&D Roadmap: Scaling & Expansion', 
    bgColor: '#ede7e1', 
    textColor: 'black', 
    customData: { 
      items: [
        'Pushing thickness toward <0.5mm', 
        'Maximizing battery and system efficiency', 
        'Scaling maison-specific integrations', 
        'Platform expansion (DPP, Ownership, insurer/authority integrations)'
      ], 
      revealedCount: 4,
      showRDAnimation: true
    } 
  },
  
  // REBRANDING SEQUENCE
  { 
    id: 29, 
    theme: '2026', 
    type: 'logo-morph', 
    topTitle: 'Rebranding',
    headline: 'Brand Transition',
    bgColor: '#000000', 
    textColor: 'white' 
  },
  { 
    id: 30, 
    theme: '2026', 
    type: 'dictionary-definition', 
    headline: 'Kairos',
    bgColor: '#000000', 
    textColor: 'white' 
  },
  { 
    id: 31, 
    theme: '2026', 
    type: 'kairos-vision', 
    headline: 'Kairos Vision',
    bgColor: '#000000', 
    textColor: 'white'
  },

  // NEXT ROUND
  {
    id: 311,
    theme: '2026',
    type: 'seed-round',
    topTitle: 'Next Round',
    headline: 'Seed round launching end of Q1 2026.\nFueling scale – not discovery.',
    subline: 'To deepen R&D, expand maison deployments, and compound what already works',
    bgColor: '#000000',
    textColor: 'white',
    bgImage: 'https://i.postimg.cc/HnHPdK2f/Background-1080x1350-Deep-Green-(1).png'
  },

  { 
    id: 33, 
    theme: 'Closing', 
    type: 'cta', 
    headline: 'Let’s continue the conversation.', 
    subline: 'jonathan@watchwell.com', 
    bgColor: '#ede7e1', 
    textColor: 'black' 
  },
];
