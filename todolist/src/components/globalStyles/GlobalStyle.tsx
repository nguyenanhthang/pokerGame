import React from 'react'
import { ContainerParent } from './GlobalStyle.style'

interface Props {
    children: JSX.Element|JSX.Element[]
}

const GlobalStyle:React.FC<Props> = ({children}) => {
    return (
        <ContainerParent>{children}</ContainerParent>
    )
}

export default GlobalStyle