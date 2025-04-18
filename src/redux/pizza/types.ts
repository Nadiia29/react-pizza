export type PizzaVariant = {
  type: number;
  size: number;
  price: number;
};

export type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  variants: PizzaVariant[];
  minPrice: number;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
