export interface Stock {
  id: string;
  description: string;
  batch_quantity?: number;
}

export interface CreateStockRequest {
  id?: string;
  description: string;
}
