export class AuthModel{
  user:{
    email: string;
    id: number;
  };
  accessToken: string;

  constructor(user: {email:string, id:number}, accessToken: string){
    this.user = user;
    this.accessToken = accessToken;
  }
}

export class AuthLoginModel{
  email: string;
  password: string;

  constructor(email: string, password: string){
    this.email = email;
    this.password = password;
  }
}
