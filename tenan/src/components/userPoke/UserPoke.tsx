import React from 'react'
import { Avatar,Box,Typography } from '@mui/material'
interface Props{
    url:string,
    name:string;
    coins:number;
}

const UserPoke:React.FC<Props> = ({url,name,coins}) => {
    return (
        <Box>
            <Avatar alt="Remy Sharp" src={`${url}`} />
            <Typography fontSize={'0.9rem'} variant="body1">
                Name: {name}
            </Typography>
            <Typography fontSize={'0.9rem'} variant="body1">
                Coins: {coins} $
            </Typography>
        </Box>
    )
}

export default UserPoke