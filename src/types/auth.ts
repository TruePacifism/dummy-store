export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}
