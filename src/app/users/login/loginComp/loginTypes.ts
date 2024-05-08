// types/loginTypes.ts
export interface LoginForm {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    message: string;
    token?: string; // Assuming your API might return a token
  }
  
  // Optional: You can create more interfaces if your API response has a specific structure
  