import React from 'react'

import { useState, useContext } from 'react'

import { useForm, useController, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from "react-router-dom";

import tw from "tailwind-styled-components"

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Input, Button } from '../../GlobalStyles';

import { AppStateContext } from '../../state';

import type { AppStateContextType, IInput } from "../../@types/multistep.d.ts"

type Inputs = {
    university: string;
    degree: string;
};

const schema = yup.object().shape({
    university: yup.string().required(),
    degree: yup.string().required(),

})

function Education() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const { input, step, setStep } = useContext(AppStateContext) as AppStateContextType;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        console.log("data", data);

        input.university = data.university;
        input.degree = data.degree;
        console.log("input", input);
        navigate("/about");
    }


    return (
        <div>
            <Form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
                <Input {...register('university')} placeholder="Digite o nome da instituição" />
                <p>{errors.university?.message}</p>
                <Input {...register('degree')} placeholder="Digite o grau" />
                <p>{errors.degree?.message}</p>
                <Button type="submit">Next {">"}</Button>
            </Form>
        </div>
    )
}

export default Education
