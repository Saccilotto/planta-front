import axiosInstance from './axiosInstance';
import {
  FinalProduct,
  CreateFinalProductRequest,
  ProductStep,
  ProductMaterial,
  BatchProduct,
  FinalProductList
} from '../types/FinalProduct';
import { response } from '../types/Default';

export const getAllFinalProducts = async (): Promise<FinalProduct[]> => {
  const response = await axiosInstance.get<FinalProduct[]>(
    '/FinalProduct/getAll'
  );
  return response.data;
};

export const getListFinalProduct = async (): Promise<FinalProductList[]> => {
  const response = await axiosInstance.get<response>('/stock/made-short-list/');

  return response.data.data;
};

export const deleteFinalProduct = async (id: string): Promise<boolean> => {
  const response = await axiosInstance.delete<response>('/products/' + id);

  return response.data.sucess;
};

export const createFinalProduct = async (
  data: CreateFinalProductRequest
): Promise<boolean> => {
  data.code = (Math.random() * 1000).toFixed(0).toString();
  const response = await axiosInstance.post<response>('/products/made', data);
  return response.data.sucess;
};

export const patchFinalProduct = async (
  data: CreateFinalProductRequest
): Promise<boolean> => {
  const response = await axiosInstance.patch<response>('/products/' + data.id, {
    category_id: data.category_id,
    description: data.description
  });
  return response.data.sucess;
};

export const getProductSteps = async (
  productId: string
): Promise<ProductStep[]> => {
  const response = await axiosInstance.get<ProductStep[]>(
    `/product_step/getByProduct/${productId}`
  );
  return response.data;
};

export const getProductMaterials = async (
  productId: string
): Promise<ProductMaterial[]> => {
  const response = await axiosInstance.get<ProductMaterial[]>(
    `/product_material/getByProduct/${productId}`
  );
  return response.data;
};

export const getBatchProducts = async (
  productId: string
): Promise<BatchProduct[]> => {
  const response = await axiosInstance.get<BatchProduct[]>(
    `/batch_product/getByProduct/${productId}`
  );
  return response.data;
};
