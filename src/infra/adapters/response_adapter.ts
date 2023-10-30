export class ResponseAdapt<T = unknown> {
  constructor(readonly response: { data: T; statusCode: number }) {}
}
