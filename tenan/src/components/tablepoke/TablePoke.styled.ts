import Box from "@mui/material/Box";
import { styled, css } from "@mui/material/styles";

export const TableBoardContainer = styled(Box)`
    background: url("../../../table.jpg") no-repeat center;
    background-size: cover;
    max-width: 100vw;
    min-height: 100vh;
`;
export const SeatUser = styled(Box)`
    display: flex;
    position:absolute;
    color:#fff;
    ${(prop:any) => {
        switch (prop.position) {
            case 1:
                return css`
                    top: 50%;
                    left: 10%;
                    transform: translateY(-50%);
                `;
            case 2:
                return css`
                    top: 50%;
                    right: 10%;
                    transform: translateY(-50%);
                    flex-direction: row-reverse;
                `;
            case 3:
                return css`
                    top: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    flex-direction: row-reverse;
                `;
            case 4:
                return css`
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                `;
            default:
                return;
        }
    }}
`;
export const RenderCard = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
`;
export const PointUser = styled(Box)`
    z-index:2;
    color: white;
    font-size: 1rem;
    text-shadow: 1px 1px 0 #88b540, 1px -1px 0 #88b540, -1px 1px 0 #88b540,
    -1px -1px 0 #88b540, 1px 0px 0 #88b540, 0px 1px 0 #88b540,
    -1px 0px 0 #88b540, 0px -1px 0 #88b540;
    ${(prop:any) => {
        switch (prop.position) {
            case 1:
                return css`
                    transform: translate(-100%, -100%);
                `;
            case 2:
                return css`
                    transform: translate(100%, -100%);
                `;
            case 3:
                return css`
                    transform: translate(100%, 400%);
                `;
            case 4:
                return css`
                    transform: translate(-100%, -100%);
                `;
            default:
                return;
        }
    }}
`;
export const Raise = styled(Box)`
    color: #ffff;
    font-size: 1rem;
`;
export const Winner = styled(Box)`
    color:#ffff;
    font-size:1rem;
`
export const Coins = styled(Box)`
    z-index:2;
    color: white;
    font-size: 1rem;
    text-shadow: 1px 1px 0 #88b540, 1px -1px 0 #88b540, -1px 1px 0 #88b540,
    -1px -1px 0 #88b540, 1px 0px 0 #88b540, 0px 1px 0 #88b540,
    -1px 0px 0 #88b540, 0px -1px 0 #88b540;
    color:#fff;
    ${(prop:any) => {
        switch (prop.position) {
            case 1:
                return css`
                    transform: translate(-100%, -300%);
                `;
            case 2:
                return css`
                    transform: translate(100%, -300%);
                `;
            case 3:
                return css`
                    transform: translate(100%, 400%);
                `;
            case 4:
                return css`
                    transform: translate(-100%, -300%);
                `;
            default:
                return;
        }
        }}
`
export const InfoContainer = styled(Box)`
    display:flex;
    flex-direction:column;
`
