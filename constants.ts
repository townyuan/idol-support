
import { Spot } from './types';

export const COLORS = {
  primary: '#8172D5',
  secondary: '#A594F9',
  accent: '#F1EFFF',
};

export const MOCK_SPOTS: Spot[] = [
  {
    id: 'spot-1',
    name: '西門町 6 號出口 LED 牆',
    location: '台北市萬華區',
    image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=400',
    targetAmount: 120000,
    leadInThreshold: 6000,
  },
  {
    id: 'spot-2',
    name: '信義 A11 電視大螢幕',
    location: '台北市信義區',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=400',
    targetAmount: 200000,
    leadInThreshold: 10000,
  },
  {
    id: 'spot-3',
    name: '捷運中山站 燈箱廣告',
    location: '台北市中山區',
    image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=400',
    targetAmount: 45000,
    leadInThreshold: 2250,
  }
];

export const REGIONS = ['台北', '台中', '高雄', '首爾', '東京'];
export const MEDIA_TYPES = ['LED 大螢幕', '燈箱廣告', '公車廣告', '地鐵廣告'];
