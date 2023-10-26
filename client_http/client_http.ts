export class ResponseAdapt<T = unknown> {
  constructor(readonly response: { data: T; statusCode: number }) {}
}

export interface ClientHttp {
  get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>>;
}

export class ClientHttpFetch implements ClientHttp {
  private baseUrl = "https://alunos.treinaweb.com.br/tw-todos/api/v1";
  async get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    const data = await response.json();

    return new ResponseAdapt({ data, statusCode: response.status });
  }
}
