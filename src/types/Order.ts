export interface Order {
  id: string;
  description: string;
  Production_Status: string;
}

export interface OrderBatchMaterial {
  raw_material_id: string;
  quantity: number;
}

export interface CreateOrderRequest {
  final_product_id: string;
  order_batch_materials: OrderBatchMaterial[];
  production_line: string;
  expected_quantity: number;
}

export interface CreateOrderResponse {
  number: number;
  return: boolean;
  message: string;
}

export interface FullOrder {
  id: number;
  number: number;
  description: string;
  production_date: string;
  production_line: string;
  Production_Status: string;
  final_product_id: number;
  production_quantity_estimated: number;
  production_quantity_real: number;
  production_quantity_loss: number;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  production_item: ProductionItem[];
}

export interface ProductionItem {
  id: number;
  production_order_id: number;
  sequence: number;
  raw_product_id: number;
  raw_product: RawProduct;
  raw_product_initial_quantity: number;
  raw_product_used_quantity: number;
  used_batchs: UsedBatch[];
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

interface RawProduct {
  description: string;
}

export interface UsedBatch {
  batch: string;
  quantity: number;
  stock_item_id: number;
}
