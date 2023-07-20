import React from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../state"

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Input, Button, Textarea } from '../../GlobalStyles';

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

   
    const navigate = useNavigate();


    const onSubmit: SubmitHandler<Inputs> = (data) => {

      
        console.log("data",data);
        navigate("/confirm");
    }

  return (
    <div>
      <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                    <Textarea rows={10} {...register('about')} placeholder="Fale sobre você" />
        
                <p>{errors.about?.message}</p>
               
                <Link to="/">
                    {"<"} Previous
                </Link>
                <Button type="submit">Next {">"}</Button>
            </Form>
    </div>
  )
}

export default About
