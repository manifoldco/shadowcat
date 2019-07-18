export * from "./components";

export interface AuthError {
  code: number;
  message: string;
}

export interface AuthToken {
  token?: string;
  expiry?: string;
  error?: AuthError;
}

export interface PumaAuthToken {
  access_token?: string;
  expiry?: string;
  error?: AuthError;
}
