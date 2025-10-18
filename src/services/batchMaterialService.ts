import axiosInstance from './axiosInstance';
import {
  BatchMaterial,
  CreateBatchMaterialRequest,
  CreateBatchMaterialResponse
} from '../types/BatchMaterial';

export const getBatchMaterialsByMaterialId = async (
  materialId: string
): Promise<BatchMaterial[]> => {
  const response = await axiosInstance.get<BatchMaterial[]>(
    `/batch_material/getByMaterial/${materialId}`
  );
  return response.data;
};

export const createBatchMaterial = async (
  data: CreateBatchMaterialRequest
): Promise<CreateBatchMaterialResponse> => {
  const response = await axiosInstance.post<CreateBatchMaterialResponse>(
    '/batch_material',
    data
  );
  return response.data;
};
