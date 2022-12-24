import React from 'react'
import { ButtonComponent } from './Button.styled';
interface Props{
    title:string;
    size:number;
}

const Button:React.FC<Props> = ({title,size=0}) => {
    return (
        <ButtonComponent style={{width:`${size}%`}}>{title}</ButtonComponent>
    )
}

export default Button