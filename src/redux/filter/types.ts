// export type SortType = {
//   name: string;
//   sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
// };

// export interface FilterSliceState {
//   searchValue: string;
//   categoryId: number;
//   currentPage: number;
//   sort: SortType;
// }

export type SortType = {
  name: string;
  sortProperty: 'rating' | 'title' | 'minPrice' | '-rating' | '-title' | '-minPrice';
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortType;
}
