

import {  useContext } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate,  } from "react-router-dom";



import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Button, Textarea, Error } from '../../GlobalStyles';

import { AppStateContext } from '../../state';

import type { AppStateContextType } from "../../@types/multistep.d.ts"

type Inputs = {
    about: string;
};

const schema = yup.object().shape({
    about: yup.string().required(),
    

})

function About() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

   
    const{ input } =useContext(AppStateContext) as AppStateContextType;
    
    const navigate = useNavigate();


    const onSubmit: SubmitHandler<Inputs> = (data) => {

      
        console.log("data",data);
        input.about = data.about;
        console.log("input", input);
        navigate("/confirm");
    }

  return (
    <div>
      <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                    <Textarea rows={10} {...register('about')} placeholder="Fale sobre você" />
        
                <Error>{errors.about?.message}</Error>
               
               
                <Button type="submit">Next {">"}</Button>
            </Form>
    </div>
  )
}

export default About
