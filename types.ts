export enum WorkCategory {
  NHK = 'nhk',
  OTHER = 'other',
}

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  categoryLabel: string; // "NHK 番組" or "その他"
  subCategory?: string;  // e.g., "ETV 特集 （E テレ）"
  date: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
}

export type HistoryGroupType = 'gray-bar' | 'simple-header' | 'year-box';

export interface HistoryItem {
  text: string;
  notes?: string[]; // For lines starting with ※ or indented text
}

export interface HistoryGroup {
  id: string;
  type: HistoryGroupType;
  title: string;
  items: HistoryItem[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  profile: string;
  history: HistoryGroup[];
}