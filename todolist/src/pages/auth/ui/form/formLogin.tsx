import React from 'react'
import { FormLoginContainer , FormUserLogin, HeaderFormLogin, InputWrapper, TitleFormLogin} from './formLogin.styled'
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

interface Props {
    title:string;
    header:string;
}

const FormLogin:React.FC<Props> = ({title,header}) => {
    return (
        <FormLoginContainer>
            <HeaderFormLogin>{header}</HeaderFormLogin>
            <TitleFormLogin>{title}</TitleFormLogin>
            <FormUserLogin>
                <InputWrapper>
                    <Input size={58} type='text' placeHolder='UserName'/>
                </InputWrapper>
                <InputWrapper>
                    <Input size={58} type='password' placeHolder='Password'/>
                </InputWrapper>
                <InputWrapper>
                    <Button size={100} title='Login'/>
                </InputWrapper>
            </FormUserLogin>
        </FormLoginContainer>
    )
}

export default FormLogin