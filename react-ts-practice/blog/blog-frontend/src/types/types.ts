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
  auth: boolean | null;
  error: errorData;
  data: signUpData | null;
}

export interface postData {
  tags: string[];
  title: string;
  body: string;
}

export interface postState {
  error: errorData;
  data: postData;
  success: PostSuccessData | null;
}

//
export interface PostSuccessData {
  title: string;
  body: string;
  tags: string[];
  user: User;
  _id: string;
  publishedDate: Date | string;
  __v: number;
}

export interface User {
  _id: string;
  username: string;
}
