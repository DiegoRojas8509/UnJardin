export type Category = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  order?: number;
};

export type Arrangement = {
  _id: string;
  name: string;
  slug: string;
  price?: number;
  priceLabel?: string;
  category?: { name: string; slug: string } | null;
  shortDescription?: string;
  flowers?: string[];
  imageUrl?: string | null;
  isFeatured?: boolean;
  isAvailable?: boolean;
  order?: number;
};
