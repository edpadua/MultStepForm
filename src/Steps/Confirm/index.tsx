

import {useContext } from 'react'

import tw from "tailwind-styled-components"

import { AppStateContext } from '../../state';

import type { AppStateContextType } from "../../@types/multistep.d.ts"

const Sucess = tw.h1`
text-center
text-5xl
font-bold
mb-24
mt-24
`;

const Item = tw.h3`
font-bold
text-lg

`;

const Text = tw.p`

text-lg

`;

function Confirm() {

  const { input }  = useContext(AppStateContext) as AppStateContextType;

  return (
    <div>
        <Sucess>
           Cadastro realizado com sucesso !
        </Sucess>
        <Item>Nome: {input.name}</Item>
        <Item>Email: {input.email}</Item>
        <Item>Universidade: {input.university}</Item>
        <Item>Grau: {input.degree}</Item>
        <Item>Sobre:</Item>
        <Text>{input.about}</Text>
       
    </div>
  )
}

export default Confirm
