export interface ApiResponse<T> {
  result: T;
  success: boolean;
  error: string;
  errorCode: number;
}

export interface ApiErrorConstruction {
  error: string;
  isHandled?: boolean;
}
