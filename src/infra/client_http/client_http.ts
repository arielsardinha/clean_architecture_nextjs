import { ResponseAdapt } from "../adapters/response_adapter";

export interface ClientHttp {
  get<T = unknown>(endpoint: string): Promise<ResponseAdapt<T>>;
}
