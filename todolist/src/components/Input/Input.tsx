import React from 'react'
import { InputForm } from './Input.styled';

interface Props{
    type:string;
    placeHolder:string;
}

const Input:React.FC<Props> = ({type,placeHolder}) => {
    return (
        <InputForm type={type} placeholder={placeHolder}/>
    )
}

export default Input