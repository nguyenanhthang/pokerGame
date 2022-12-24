import React from 'react'
import './GlobalStyle.module.scss';
interface Props {
    children: JSX.Element|JSX.Element[]
}

const GlobalStyle:React.FC<Props> = ({children}) => {
    return React.Children.only(children)
}

export default GlobalStyle