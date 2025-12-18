
import { Spot } from './types';

export const COLORS = {
  primary: '#8172D5',
  secondary: '#A594F9',
  accent: '#F1EFFF',
};

export const MOCK_SPOTS: Spot[] = [
  {
    id: 'spot-1',
    name: '西門町 6 號出口 LED',
    location: '台北市萬華區',
    image: 'https://picsum.photos/seed/ximen/400/250',
    targetAmount: 100000,
    leadInThreshold: 5000,
  },
  {
    id: 'spot-2',
    name: '信義區 香堤大道大螢幕',
    location: '台北市信義區',
    image: 'https://picsum.photos/seed/xinyi/400/250',
    targetAmount: 150000,
    leadInThreshold: 7500,
  },
  {
    id: 'spot-3',
    name: '台北車站 地下街燈箱 A1',
    location: '台北市中正區',
    image: 'https://picsum.photos/seed/taipeimain/400/250',
    targetAmount: 50000,
    leadInThreshold: 2500,
  },
  {
    id: 'spot-4',
    name: '捷運中山站 月台電視牆',
    location: '台北市中山區',
    image: 'https://picsum.photos/seed/zhongshan/400/250',
    targetAmount: 80000,
    leadInThreshold: 4000,
  },
];

export const REGIONS = ['台北', '台中', '高雄', '首爾', '東京'];
export const MEDIA_TYPES = ['燈箱', '公車廣告', 'LED 大螢幕', '咖啡廳應援'];
