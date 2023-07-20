import * as React from 'react';

import { AppStateContextType, IInput } from "./@types/multistep";

export const AppStateContext = React.createContext<AppStateContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [input, setInput] = React.useState<IInput>(
          {
            name: "",
            email:"",
            password:"",
            confirm_password:"",
            university:"",
            degree:"",
            about:"",
          }
    );

    const [step, setStep] = React.useState<string>("contact");

    const saveInput = (input: IInput) => {
        const newInput: IInput = {
            name: input.name,
            email:input.email,
            password:input.password,
            confirm_password:input.confirm_password,
            university: input.university,
            degree: input.university,
            about: input.about,
        };


        setInput(newInput);
        console.log("Input",input);
    };

    return (
        <AppStateContext.Provider value={{input, saveInput, step, setStep}}>
            {children}
        </AppStateContext.Provider>
    );
}

