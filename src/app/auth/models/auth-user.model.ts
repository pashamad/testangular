export interface AuthenticatedUser {
  authToken: string;
  role: string;
  email: string;
  user_id: string;
  exp: number;
}
