import axiosInstance from './axiosInstance';
import { Category, CreateCategoryRequest } from '../types/Category';
import { response } from '../types/Default';

export const getCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get<response>('/categories');
  return response.data.data;
};

export const createCategory = async (
  data: CreateCategoryRequest
): Promise<boolean> => {
  const response = await axiosInstance.post<response>('/categories', data);
  return response.data.sucess;
};

export const patchCategory = async (
  data: CreateCategoryRequest
): Promise<boolean> => {
  const response = await axiosInstance.patch<response>(
    '/categories/' + data.id,
    {
      description: data.description
    }
  );
  return response.data.sucess;
};

export const getAllCategories = async () => {
  return axiosInstance.get('/categories?orderBy=id');
};

export const getCategoryById = async (id: number) => {
  return axiosInstance.get(`/categories/${id}`);
};

export const deleteCategory = async (id: string) => {
  return axiosInstance.delete(`/categories/${id}`);
};
