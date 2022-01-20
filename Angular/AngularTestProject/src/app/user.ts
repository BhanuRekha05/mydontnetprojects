export interface ILoginResult {
    userName:string;
    password:string;
    loginSucessful:boolean;
    login(obj :any) : Promise<ILoginResult>;
}
