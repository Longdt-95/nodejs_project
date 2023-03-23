export class ResponseBase<T> {
  data: T = undefined;
  message?: string = undefined;

  constructor(data: T, message?: string) {
    this.data = data;
    this.message = message;
  }
}
