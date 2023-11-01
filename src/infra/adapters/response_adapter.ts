export interface ResponseAdapt<T = unknown> {
  data: T;
  statusCode: number;
}
