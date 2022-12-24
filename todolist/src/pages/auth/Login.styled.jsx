import styled from "styled-components";

export const ContainerLogin = styled.div`
  background:url(../../../bg.png);
  background-size: cover;
  background-position: center center;
  min-height:100vh;
  width:100%;
  display:flex;
  justify-content: center;
  align-items:center;
  position:relative;
  :after{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #000;
    opacity: .3;
    z-index: 1;
    }
`
