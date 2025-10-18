import axiosInstance from './axiosInstance';
import {
  RawMaterial,
  CreateRawMaterialRequest,
  RawMaterialList,
  RawMaterialSelect
} from '../types/RawMaterial';
import { response } from '../types/Default';

export const getAllRawMaterials = async (): Promise<RawMaterial[]> => {
  const response = await axiosInstance.get<RawMaterial[]>(
    '/raw_material/getAll'
  );
  return response.data;
};

export const getSelectRawMaterial = async (): Promise<RawMaterialSelect[]> => {
  const response = await axiosInstance.get<response>(
    '/products/raw-material-short/'
  );

  return response.data.data;
};

export const getListRawMaterial = async (): Promise<RawMaterialList[]> => {
  const response = await axiosInstance.get<response>(
    '/stock/raw-material-short-list/'
  );

  return response.data.data;
};

export const deleteRawMaterial = async (id: string): Promise<boolean> => {
  const response = await axiosInstance.delete<response>('/products/' + id);

  return response.data.sucess;
};

export const createRawMaterial = async (
  data: CreateRawMaterialRequest
): Promise<boolean> => {
  data.code = (Math.random() * 1000).toFixed(0).toString();
  const response = await axiosInstance.post<response>('/products/raw', data);
  return response.data.sucess;
};

export const patchRawMaterial = async (
  data: CreateRawMaterialRequest
): Promise<boolean> => {
  const response = await axiosInstance.patch<response>('/products/' + data.id, {
    category_id: data.category_id,
    description: data.description
  });
  return response.data.sucess;
};
