export interface Step {
  id: string;
  description: string;
}

export interface CreateStepRequest {
  id?: string;
  description: string;
}
