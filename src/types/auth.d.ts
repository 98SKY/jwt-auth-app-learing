export interface User {
    id: string;
    email: string;
    name: string;
    // add any other fields from the JWT payload
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
  }
  