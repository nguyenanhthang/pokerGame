import React, { useState } from 'react'
import { TableBoardContainer, SeatUser, RenderCard, PointUser, Raise, Winner,Coins,InfoContainer } from './TablePoke.styled'
import UserPoke from '../userPoke/UserPoke'
import { user } from '../../Data/Data';
import { Button, ButtonGroup } from '@mui/material'
import { card } from '../cardPoke/Card'
import { motion, Variants } from "framer-motion";
//import '../cardPoke/card.css';
import CardPoke from '../cardPoke/CardPoke';
import styled from 'styled-components';
const variants: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
}
const BackSideCardImage = styled.img`
    width: 60px;
    height: 90px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: absolute;
    top:40%;
    left:47%;
`;
const WinnerUser = styled(motion.div)`
    z-index:2;
    position:absolute;
    top:45%;
    left:46%;
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 0 #88b540, 2px -2px 0 #88b540, -2px 2px 0 #88b540,
    -2px -2px 0 #88b540, 2px 0px 0 #88b540, 0px 2px 0 #88b540,
    -2px 0px 0 #88b540, 0px -2px 0 #88b540;
`;
const TablePoke = () => {
    const [isFlipped, setIsFlipped] = useState('')
    const [show, setShow] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [showButton,setButton]=useState<any>(true)
    const [userCard1,setUserCard1]=useState<any>([])
    const [userCard2,setUserCard2]=useState<any>([])
    const [userCard3,setUserCard3]=useState<any>([])
    const [userCard4,setUserCard4]=useState<any>([])
    const raise = 1000;
    const variants= [{
        initial: { x: 8, y: -8, display: "none" },
        end: { x: -1, y: 15, transition: { duration: 1, delay: 0 } },
    }, {
        initial: { x: 8, y: -8, display: "none" },
        end: { x: -2, y: 15, transition: { duration: 1, delay: 0} },
    },
    {
        initial: { x: 8, y: -8, display: "none" },
        end: { x: -3, y: 15, transition: { duration: 1, delay: 0 } },
    },
    ]
    const handleFlipped = () => {
        setIsFlipped('flipped')
    }
    const calculates = () => {
        for (let index = 0; index < user.length; index++) {
            for (let j = 0; j < user[index].card.length; j++) {
                user[index].point += user[index].card[j].value
            }
        }
    }
    const calcPoint = (point: number) => {
        if (point >= 10 && point % 10 === 0) {
            return 10;
        }
        return point % 10;
    };
    const winGame = () => {
        let getMaxUser = user[0].point
        let getUser = user[0].name;
        for (let index = 0; index < user.length; index++) {
            if (calcPoint(getMaxUser) < calcPoint(user[index].point)) {
                getMaxUser = user[index].point
                getUser = user[index].name
            }
        }
        return getUser
    }
    const calcPlusPoint = () => {
        user.map((el:any) => {
            if (el.name === winGame()) {
                return el.coins = el.coins + (raise * 3)
            }
            return el.coins = el.coins - raise
        })
    }
    const calcPlusPointRender = (el:any) => {
        if (el.name === winGame()) {
            return `+ ${raise * 3} coins 🏆` 
        }
        return `- ${raise} coins`
    }
    const startGame = () => {
        let cards: any[] = [...card]
        cards.sort(() => Math.random() - 0.5)
        let id = setInterval(() => {
            if (user[0].card.length > 2) {
                return
            }
            setUserCard1([...userCard1,userCard1.push(cards.pop())])
            setUserCard2([...userCard2,userCard2.push(cards.pop())])
            setUserCard3([...userCard3,userCard3.push(cards.pop())])
            setUserCard4([...userCard4,userCard4.push(cards.pop())])
            user[0].card=userCard1
            user[1].card=userCard2
            user[2].card=userCard3
            user[3].card=userCard4
            // user.map((el: any) => {
            //     el.card.push(cards.pop())
            // })
            console.log('a');
        }, 2000)
        setButton(false)
        setTimeout(() => {
            clearInterval(id)
            setShow(true)
            calculates()
            calcPlusPoint()
            setShowCard(true)
            setButton(true)
            handleFlipped()
        }, 9000)
    }
    const newGame = () => {
        setShowCard(false)
        setUserCard1([])
        setUserCard2([])
        setUserCard3([])
        setUserCard4([])
        setShow(false)
        setIsFlipped('')
        user.map((el: any) => {
            el.card=[]
            el.point = 0
        })
        
    }
    return (
        <TableBoardContainer>
            <Raise>Mức Cược: {raise}</Raise>
            <BackSideCardImage src="../../../cards/back.png" />
            {user.map((el: any) => {
                return (
                    <SeatUser position={el.id}>
                            <UserPoke url='/static/images/avatar/1.jpg' name={el.name} coins={el.coins} />
                        <InfoContainer>
                            {show&&<PointUser position={el.id}>{calcPoint(el.point)} Điểm</PointUser>}
                            {show&&<Coins position={el.id}>{calcPlusPointRender(el)}</Coins>}
                        </InfoContainer>
                        <RenderCard>
                            {el.card && el.card.map((el: any, i: any) => {
                                return (
                                    <CardPoke key={i} handleFlipped={handleFlipped} img={el.img} isFlipped={isFlipped} show={showCard} variant={variants[i]}/>
                                )
                            })}
                        </RenderCard>
                    </SeatUser>
                )
            })}
            {show && <WinnerUser>
                {winGame()} Win 🏆
            </WinnerUser>}
            {showButton&&<ButtonGroup sx={{
                position: 'absolute',
                top:'40%',
                left:'44%',
            }}>
                <Button onClick={startGame} variant="contained">Start</Button>
                <Button onClick={newGame} variant="contained">New game</Button>
            </ButtonGroup>}
        </TableBoardContainer>
    )
}

export default TablePoke