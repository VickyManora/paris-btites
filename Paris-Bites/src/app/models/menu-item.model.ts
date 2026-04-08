export type BowlSize = 'REGULAR' | 'MINI';
export type BadgeType = 'BESTSELLER' | 'MOST_LOVED' | 'SIGNATURE' | null;
export type BowlCategory = 'SIGNATURE' | 'PREMIUM';

export interface MenuItem {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  price: string;
  size: BowlSize;
  category: BowlCategory;
  badge?: BadgeType;
}

