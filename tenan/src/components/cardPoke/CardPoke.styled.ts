import styled from "styled-components";
import { motion } from "framer-motion";
export const Scene= styled.div` 
    width: 60px;
    height: 90px;
    perspective: 600px;
`
export const Card= styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: center right;
    transition: transform 1s;
    .flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }
`
export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`
export const CardFaceB = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`
export const FontImg = styled(motion.img)`
    width:100%;
    height:100%;
`
export const BackImg = styled(motion.img)`
    width:100%;
    height:100%;
    
`