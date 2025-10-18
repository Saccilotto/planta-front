export interface Category {
  id: string;
  description: string;
  batch_quantity?: number;
}

export interface CreateCategoryRequest {
  id?: string;
  description: string;
}
