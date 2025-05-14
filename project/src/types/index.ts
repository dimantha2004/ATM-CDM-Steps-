export type Language = 'english' | 'sinhala' | 'tamil';

export type MachineType = 'atm' | 'cdm';

export interface Step {
  id: number;
  title: {
    english: string;
    sinhala: string;
    tamil: string;
  };
  description: {
    english: string;
    sinhala: string;
    tamil: string;
  };
  animationSrc: string;
  tips?: {
    english: string;
    sinhala: string;
    tamil: string;
  }[];
}

export interface GuideData {
  atm: Step[];
  cdm: Step[];
}