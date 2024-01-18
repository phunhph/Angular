export interface ApiResponse<T> {
  message?: string;
  data: T;
  success: boolean;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
}
