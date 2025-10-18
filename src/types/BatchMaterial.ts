export interface BatchMaterial {
  id: string;
  description: string;
  current_quantity: number;
}

export interface CreateBatchMaterialRequest {
  raw_material_id: string;
  dealer: string;
  cost_price: number;
  measure_unit: string;
  initial_quantity: number;
  in_date: Date;
  stock_id: string;
  sku: string;
}

export interface CreateBatchMaterialResponse {
  return: boolean;
  message: string;
}
