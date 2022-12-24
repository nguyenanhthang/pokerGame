import styled from "styled-components";

export const InputForm = styled.input`
    height: ${props => props.size}px;
    color: white !important;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    transition: 0.3s;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width:100%;
    color:#fff;
    ::placeholder{
        color: #ffff;
    }
    :hover{
        background: transparent;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ced4da;
    }
`