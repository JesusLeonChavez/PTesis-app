export interface User {
  uid: string;
  email: string;
  name: string;
  lastname: string;
}

export interface CreateUserConfig extends User {}
