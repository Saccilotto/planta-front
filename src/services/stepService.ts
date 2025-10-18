import axiosInstance from './axiosInstance';
import { Step, CreateStepRequest } from '../types/Step';
import { response } from '../types/Default';

export const getSteps = async (): Promise<Step[]> => {
  const response = await axiosInstance.get<response>('/steps');
  return response.data.data;
};

export const createStep = async (data: CreateStepRequest): Promise<boolean> => {
  const response = await axiosInstance.post<response>('/steps', data);
  return response.data.sucess;
};

export const patchStep = async (data: CreateStepRequest): Promise<boolean> => {
  const response = await axiosInstance.patch<response>('/steps/' + data.id, {
    description: data.description
  });
  return response.data.sucess;
};

export const getAllSteps = async () => {
  return axiosInstance.get('/steps?orderBy=id');
};

export const getStepById = async (id: number) => {
  return axiosInstance.get(`/steps/${id}`);
};

export const deleteStep = async (id: string) => {
  return axiosInstance.delete(`/steps/${id}`);
};

export const stepsByProductId = async (id: string) => {
  return axiosInstance.get(`compositions/steps-by-product/${id}`);
};
