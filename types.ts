
export enum Step {
  Filter = 1,
  SpotSelection = 2,
  ContentEditor = 3,
  ReviewPay = 4,
  Success = 5
}

export interface Spot {
  id: string;
  name: string;
  image: string;
  targetAmount: number;
  leadInThreshold: number;
  location: string;
}

export interface ProjectData {
  idols: string[];
  region: string;
  mediaType: string;
  date: string;
  selectedSpot?: Spot;
  title: string;
  description: string;
  draftFile?: string;
  coverFile?: string;
}
