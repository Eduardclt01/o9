export interface AgendaState {
  allSpeakerList: KeynoteBlock[];
  speakersFilteredOnDay: KeynoteBlock[];
  selectedDay: number;
}

export interface KeynoteBlock {
  blockName: string;
  attrs: KeynoteItem;
  innerBlocks: InnerBlock[];
  innerHTML: string;
  innerContent: string | undefined[];
}

export interface KeynoteItem {
  title: string;
  startTime: string;
  duration: number;
  category: string;
  day: string;
  speakerList: SpeakerList[];
  coverImage?: coverImage;
}

export interface coverImage {
  id: number;
  url: string;
  alt: string;
}

export interface SpeakerList {
  id: number;
  name: string;
  position: string;
  image: Image;
  company_logo: CompanyLogo[];
}

export interface Image {
  id: number;
  url: string;
  alt: string;
  srcset: string;
}

export interface CompanyLogo {
  mediaId: number;
  mediaUrl: string;
  sizes: Sizes;
}

export interface Sizes {
  full: Full;
}

export interface Full {
  url: string;
}

export interface InnerBlock {
  blockName: string;
  attrs: any[];
  innerBlocks: any[];
  innerHTML: string;
  innerContent: string[];
}
