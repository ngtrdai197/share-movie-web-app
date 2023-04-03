export interface IBaseAuthRequest {
  email: string;
  password: string;
}

export interface IBaseAuthResponse {
  accessToken: string;
}
