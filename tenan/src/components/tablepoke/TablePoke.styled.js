import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

export const TableBoardContainer = styled(Box)`
    background:url('../../../table.jpg') no-repeat center;
    background-size: cover;
    width:100vw;
    min-height:100vh;
`
export const TableTop= styled(Box)`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    color:#ffff;
`
export const TableBottom = styled(Box)`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    color:#ffff;
`
export const TableLeftRight = styled(Box)`
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-content:center;
    color:#fff;
`