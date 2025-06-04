export interface User {
  sub: string;
  role: string;
  exp: number;
  iat: number;
}


export interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}
