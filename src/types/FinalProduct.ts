import { Category } from './Category';
import { RawMaterial } from './RawMaterial';
import { Step } from './Step';

export interface FinalProduct {
  id: string;
  description: string;
  category: Category;
  image: string;
  batch_quantity: number;
}

export interface ProductStep {
  id: string;
  numero_etapa: string;
  step: Step;
}

export interface ProductMaterial {
  id: string;
  raw_material: RawMaterial;
}

export interface FinalProductList {
  id: number;
  description: string;
  category: string;
  batch_quantity: number;
}

export interface CreateFinalProductRequest {
  description: string;
  category_id?: number;
  code?: string;
  image?: string;
  raw_materials?: RawMaterial[];
  steps?: Step[];
  id?: string;
}

export interface BatchProduct {
  id: string;
  sku: string;
  initial_quantity: string;
  current_quantity: string;
  image: string;
  measure_unit: string;
}
