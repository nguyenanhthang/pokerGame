import React, { useCallback } from 'react'
import { FormLoginContainer , FormUserLogin, HeaderFormLogin, InputWrapper, TitleFormLogin} from './formLogin.styled'
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { useAppDispatch,useAppSelector } from '../../../../app/hooks';
import { setUserName,setUserPassword } from '../../../../features/user/userSlice';
import { dataPeople } from '../../../../data/data';
import { useNavigate } from 'react-router-dom';
interface Props {
    title:string;
    header:string;
}

const FormLogin:React.FC<Props> = ({title,header}) => {
    const dispatch = useAppDispatch()
    const userLogin = useAppSelector((state)=> state.user.username)
    const passwordLogin = useAppSelector((state)=> state.user.password)
    const Navigate = useNavigate()
    const inputUser = (e:any)=>{
        dispatch(setUserName(e.target.value))
    }
    const inputPassword = (e:any)=>{
        dispatch(setUserPassword(e.target.value))
    }
    const handleLogin = ()=>{
        dataPeople.map((el,i)=>{
            if(el.username===userLogin&& el.password===passwordLogin){
                return Navigate('/home')
            }
            return alert('incorrect !')
        })
    }
    return (
        <FormLoginContainer>
            <HeaderFormLogin>{header}</HeaderFormLogin>
            <TitleFormLogin>{title}</TitleFormLogin>
            <FormUserLogin>
                <InputWrapper>
                    <Input size={58} type='text' onChange={inputUser} placeHolder='UserName'/>
                </InputWrapper>
                <InputWrapper>
                    <Input size={58} type='password' onChange={inputPassword} placeHolder='Password'/>
                </InputWrapper>
                <InputWrapper>
                    <Button onClick={handleLogin} size={100} title='Login'/>
                </InputWrapper>
            </FormUserLogin>
        </FormLoginContainer>
    )
}

export default FormLogin