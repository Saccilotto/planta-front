import { Category } from './Category';

export interface RawMaterial {
  id: string;
  description: string;
  category: Category;
  image: string;
  batch_quantity: number;
}

export interface RawMaterialList {
  id: number;
  description: string;
  category: string;
  batch_quantity: number;
}

export interface RawMaterialSelect {
  id: string;
  description: string;
}

export interface CreateRawMaterialRequest {
  id?: string;
  description: string;
  code?: string;
  category_id: number;
  image?: string;
}
