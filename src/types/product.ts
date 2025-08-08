export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
