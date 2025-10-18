import axiosInstance from './axiosInstance';
import { Stock, CreateStockRequest } from '../types/Stock';
import { response } from '../types/Default';

export const getStocks = async (): Promise<Stock[]> => {
  const response = await axiosInstance.get<response>('/stock-locations');
  return response.data.data;
};

export const createStock = async (
  data: CreateStockRequest
): Promise<boolean> => {
  const response = await axiosInstance.post<response>('/stock-locations', data);
  return response.data.sucess;
};

export const patchStock = async (
  data: CreateStockRequest
): Promise<boolean> => {
  const response = await axiosInstance.patch<response>(
    '/stock-locations/' + data.id,
    {
      description: data.description
    }
  );
  return response.data.sucess;
};

export const getAllStocks = async () => {
  return axiosInstance.get('/stock-locations?orderBy=id');
};

export const getStockById = async (id: number) => {
  return axiosInstance.get(`/stock-locations/${id}`);
};

export const deleteStock = async (id: string) => {
  return axiosInstance.delete(`/stock-locations/${id}`);
};
