import axiosInstance from "../axios/axiosInstance";
import configureAxios from "../axios/configureAxios";
import { AxiosResponse } from "axios";

configureAxios(axiosInstance);

async function get<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
  return axiosInstance.get<T>(url, { params });
}

const post = async <T>(url: string, data: unknown): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data);
  return response.data;
};

export const requestService = {
  get,
  post,
};
