import React from 'react'
import { ContainerLogin } from './Login.styled'
import FormLogin from './ui/form/formLogin'
interface Props {}

const Login:React.FC<Props> = () => {
  return (
    <ContainerLogin>
      <FormLogin title='Have an account?' header='Login'/>
    </ContainerLogin>
  )
}

export default Login