export interface loginData {
  username: string;
  password: string;
}

export interface signUpData {
  username: string;
  password: string;
  // nickname: string;
  // gender: any;
  // birthday: Date | null;
}

export interface errorData {
  loading: boolean;
  error: Error | null;
}

export interface loginState {
  error: errorData;
  auth: boolean | null;
  data: loginData | null;
}

export interface signUpState {
  error: errorData;
  auth: boolean | null;
  data: signUpData | null;
}

export interface postData {
  title: string;
  body: string;
  tags: string[];
}

export interface postState {
  error: errorData;
  data: postData;
}
