import React from 'react'
import { FormLoginContainer , HeaderFormLogin, TitleFormLogin} from './formLogin.styled'

interface Props {
    title:string;
    header:string;
}

const FormLogin:React.FC<Props> = ({title,header}) => {
    return (
        <FormLoginContainer>
            <HeaderFormLogin>{header}</HeaderFormLogin>
            <TitleFormLogin>{title}</TitleFormLogin>
        </FormLoginContainer>
    )
}

export default FormLogin