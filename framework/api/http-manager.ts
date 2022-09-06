import axios, { AxiosResponse } from "axios";

export class HttpManager {
  public static async get(urlInput: string, parameters = {}): Promise<AxiosResponse> {
    const apiResponse = await axios.get(`${urlInput}`, {
      params: parameters,
    });
    return apiResponse;
  }

  public static async post<T>(urlInput: string, bodyRequest: T, headers = {}): Promise<AxiosResponse> {
    const apiResponse: AxiosResponse = await axios.post(`${urlInput}`, bodyRequest, headers);
    return apiResponse;
  }

  public static async put(urlInput: string, parameters = {}, headers = {}): Promise<AxiosResponse> {
    const apiResponse: AxiosResponse = await axios.put(`${urlInput}`, parameters, headers);
    return apiResponse;
  }

  public static async delete(urlInput: string, parameters = {}): Promise<AxiosResponse> {
    const apiResponse: AxiosResponse = await axios.delete(`${urlInput}`, {
      params: parameters,
    });
    return apiResponse;
  }
}
