export interface apiResponse_i<T = any> {
  success: boolean;
  data: T;
}

export type customErr_t = [errorCode: number, message: string];

export type apiResponse_T<T = any> = customErr_t | apiResponse_i<T>;
