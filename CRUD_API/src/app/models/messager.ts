export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IMessage {
  _id?: string;
  id_in: string;
  id_out: string;
  message: string;
}
