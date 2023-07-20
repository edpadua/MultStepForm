import React from 'react'

import { useState, useContext } from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from "react-router-dom";

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Input, Button, Textarea } from '../../GlobalStyles';

import { AppStateContext } from '../../state';

import type { AppStateContextType, IInput } from "../../@types/multistep.d.ts"

type Inputs = {
    about: string;
};

const schema = yup.object().shape({
    about: yup.string().required(),
    

})

function About() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

   
    const{ input, step, setStep } =useContext(AppStateContext) as AppStateContextType;
    
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
        
                <p>{errors.about?.message}</p>
               
               
                <Button type="submit">Next {">"}</Button>
            </Form>
    </div>
  )
}

export default About
