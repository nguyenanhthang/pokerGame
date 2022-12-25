import React from 'react'
import { InputForm } from './Input.styled';

interface Props{
    type:string;
    placeHolder:string;
    size:number;
    onChange?:(e:any)=>void
}

const Input:React.FC<Props> = ({size,type,placeHolder,onChange}) => {
    return (
        <InputForm size={size} type={type} onChange={onChange} placeholder={placeHolder}/>
    )
}

export default Input