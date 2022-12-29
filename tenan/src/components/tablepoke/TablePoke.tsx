import React from 'react'
import { TableBoardContainer,TableTop,TableLeftRight } from './TablePoke.styled'
import { Icon } from '@mui/material'
import UserPoke from '../userPoke/UserPoke'

type Props = {}

const TablePoke = (props: Props) => {
    return (
        <TableBoardContainer>
            <TableTop>
                {/* <Icon color="primary">add_circle</Icon> */}
                <UserPoke url='/static/images/avatar/1.jpg'name="Thang" coins={8900000}/>
                <TableLeftRight>
                    {/* <Icon color="primary">add_circle</Icon> */}
                    <UserPoke url='/static/images/avatar/1.jpg'name="Tu" coins={10000}/>
                    <UserPoke url='/static/images/avatar/1.jpg'name="Quyet" coins={50000}/>
                    {/* <Icon color="primary">add_circle</Icon> */}
                </TableLeftRight>
                {/* <Icon color="primary">add_circle</Icon> */}
                <UserPoke url='/static/images/avatar/1.jpg'name="Tan" coins={100000}/>
            </TableTop>
        </TableBoardContainer>
    )
}

export default TablePoke