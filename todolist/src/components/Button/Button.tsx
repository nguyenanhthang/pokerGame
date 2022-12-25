import React from 'react'
import { ButtonComponent } from './Button.styled';
interface Props{
    title:string;
    size:number;
    onClick:()=>void
}

const Button:React.FC<Props> = ({title,size=0,onClick}) => {
    return (
        <ButtonComponent onClick={onClick} style={{width:`${size}%`}}>{title}</ButtonComponent>
    )
}

export default Button