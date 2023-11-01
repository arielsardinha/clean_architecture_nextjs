import { ClientHttp } from "./client_http";
import { ResponseAdapt } from "../adapters/response_adapter";

export class ClientHttpFetch implements ClientHttp {
  private static instance: ClientHttpFetch;
  private baseUrl = "https://alunos.treinaweb.com.br/tw-todos/api/v1";

  private constructor() {}

  public static getInstance(): ClientHttpFetch {
    if (!this.instance) {
      this.instance = new ClientHttpFetch();
    }
    return this.instance;
  }

  async get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    const data = await response.json();
    return {
      data,
      statusCode: response.status,
    };
  }
}
