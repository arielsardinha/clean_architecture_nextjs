import axios from "axios";
export class ResponseAdapt<T = unknown> {
  constructor(readonly response: { data: T; statusCode: number }) {}
}

export interface ClientHttp {
  get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>>;
}

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

    return new ResponseAdapt({ data, statusCode: response.status });
  }
}

export class ClientHttpAxios implements ClientHttp {
  private baseUrl = "https://alunos.treinaweb.com.br/tw-todos/api/v1";
  private axiosInstance = axios.create({
    baseURL: this.baseUrl,
  });

  async get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>> {
    const response = await this.axiosInstance.get<T>(endpoint);

    return new ResponseAdapt({
      data: response.data,
      statusCode: response.status,
    });
  }
}
