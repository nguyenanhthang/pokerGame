import React from 'react'
import './card.css'
import { Scene, Card, CardFace, FontImg, BackImg, CardFaceB } from './CardPoke.styled';
import { motion, Variants } from "framer-motion";
interface Props{
    key:number;
    handleFlipped:()=>void;
    img:string;
    isFlipped:string;
    show:boolean;
    variant:any
}
const CardPoke:React.FC<Props>= ({ key, handleFlipped, img, isFlipped, show,variant }) => {
    
    return (
        <Scene>
            <Card key={key} onClick={handleFlipped} style={{transform:show?'translateX(-100%) rotateY(-180deg)':''}} className={`${isFlipped}`}>
                <CardFaceB><BackImg variants={variant} animate={!show ? "initial" : "end"} src={img} alt="" /></CardFaceB>
                <CardFace><FontImg src='../../../cards/back.png' alt="" /></CardFace>
            </Card>
        </Scene>
    )
}

export default CardPoke