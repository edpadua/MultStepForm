export interface IInput{
    name: string;
    email: string;
    password:string;
    confirm_password:string;
    university:string;
    degree:string;
    about:string;

}


export type AppStateContextType = {
    input: IInput;
    saveInput: (input: IInput) => void;
  };