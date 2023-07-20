

import { useContext } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from "react-router-dom";



import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, Input, Button, Error } from '../../GlobalStyles';

import { AppStateContext } from '../../state';

import type { AppStateContextType } from "../../@types/multistep.d.ts"

type Inputs = {
    university: string;
    degree: string;
};

const schema = yup.object().shape({
    university: yup.string().required(),
    degree: yup.string().required(),

})

function Education() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });


    const { input } = useContext(AppStateContext) as AppStateContextType;

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
                <Error>{errors.university?.message}</Error>
                <Input {...register('degree')} placeholder="Digite o grau" />
                <Error>{errors.degree?.message}</Error>
                <Button type="submit">Next {">"}</Button>
            </Form>
        </div>
    )
}

export default Education
