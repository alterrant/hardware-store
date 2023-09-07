export type TSubcategory = {
  id: number;
  subcategoryName: string;
};
export type TCategory = {
  id: number;
  categoryName: string;
  subcategories: TSubcategory[];
};
