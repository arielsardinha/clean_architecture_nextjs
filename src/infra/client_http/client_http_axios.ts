import axios from "axios";
import { ClientHttp } from "./client_http";
import { ResponseAdapt } from "../adapters/response_adapter";

export class ClientHttpAxios implements ClientHttp {
  private baseUrl = "https://alunos.treinaweb.com.br/tw-todos/api/v1";
  private axiosInstance = axios.create({
    baseURL: this.baseUrl,
  });

  async get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>> {
    const response = await this.axiosInstance.get<T>(endpoint);
    return {
      data: response.data,
      statusCode: response.status,
    };
  }
}
