
export type BackgroundColor = '#365850' | '#ede7e1' | '#000000' | '#c2b59b';

export type StoryTheme = 'Intro' | 'Market' | 'Commercial' | 'R&D' | '2026' | 'Closing';

export interface SlideData {
  id: number;
  theme: StoryTheme;
  headline: string;
  subline?: string;
  topTitle?: string;
  bodyText?: string;
  bgColor: BackgroundColor;
  textColor: 'white' | 'black' | 'green';
  type?: 'intro' | 'reveal-scroll' | 'market-needs' | 'numeric' | 'brand-list' | 'morph' | 'cta' | 'standard' | 'technical-schematic' | 'layered-reveal' | 'video' | 'market-expansion' | 'partner-reveal' | 'bubble-comparison' | 'hardware-timeline' | 'vision-reality' | 'logo-morph' | 'dictionary-definition' | 'kairos-vision' | 'seed-round';
  customData?: any;
  bgImage?: string;
  bgImageAlt?: string;
  disclaimer?: string;
}