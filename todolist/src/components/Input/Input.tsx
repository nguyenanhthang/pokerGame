import React from 'react'
import { InputForm } from './Input.styled';

interface Props{
    type:string;
    placeHolder:string;
    size:number;
}

const Input:React.FC<Props> = ({size,type,placeHolder}) => {
    return (
        <InputForm size={size} type={type} placeholder={placeHolder}/>
    )
}

export default Input