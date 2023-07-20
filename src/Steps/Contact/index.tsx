

import { useContext } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, } from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Input, Button, Error } from '../../GlobalStyles';

import { AppStateContext } from '../../state';

import type { AppStateContextType } from "../../@types/multistep.d.ts"

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email('Email is invalid'),
    password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: 
    yup.string().required('Password confirmation is required').oneOf([yup.ref('password')], 'Passwords must match'),
})

function Contact() {
    
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const{ input } =useContext(AppStateContext) as AppStateContextType;
    
    const navigate = useNavigate();
      
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      
            
            console.log("data",data);
            input.name=data.name;
            input.email=data.email;
            input.password=data.password;
            input.confirm_password=data.confirm_password;

            console.log("input",input);
           
            navigate("/education");
    }


    return (
        <div>
            <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('name')} placeholder="Digite o nome" />
                <Error>{errors.name?.message}</Error>
                <Input {...register('email')} placeholder="Digite o e-mail" />
                <Error>{errors.email?.message}</Error>
                <Input type='password' {...register('password')} placeholder="Digite a senha" />
                <Error>{errors.password?.message}</Error>
                <Input type='password' {...register('confirm_password')} placeholder="Digite a senha novamente para confirmar" />
                <Error>{errors.confirm_password?.message}</Error>
                <Button type="submit">Next {">"}</Button>
                
            </Form>
        </div>
    )
}

export default Contact

