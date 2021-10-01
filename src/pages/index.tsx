import { Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import stefLogo from '../assets/stef.png'
import {
  LoginBox,
  Header,
  InputBox,
  Main,
  MyButton,
  TextBox,
  LoginFooterBox,
  InputLogin,
  MyThemeComponent
} from '../styles/pages/Home'
const { asPath } = useRouter()

const Home: React.FC = () => {
  return (
    <Main>
      <Header>
        <img src={stefLogo} style={{ width: '30%', height: '55%' }} />
      </Header>
      <TextBox>
        Essa é uma oportunidade para conhecer pessoas, desenvolver habilidades e
        compartilhar experiências. Saiba que este processo envolve muito
        aprendizado e contamos com você para que essa jornada seja leve,
        produtiva e inspiradora.
      </TextBox>
      <MyThemeComponent>ALOSSsssSSSO</MyThemeComponent>
      <LoginBox>
        <Box
          width="100%"
          height="10%"
          fontWeight="bold"
          fontSize="1.5em"
          color="#5a5a5a"
          marginBottom="20px"
        >
          Login
        </Box>
        <InputBox>
          <InputLogin
            id="filled-basic"
            label="Email Corporativo"
            variant="outlined"
          />
          <InputLogin
            type="password"
            id="filled-basic"
            label="Password"
            variant="outlined"
          />
        </InputBox>
        <MyButton>Login</MyButton>
        <LoginFooterBox>
          <b>Esqueci Senha</b>
          <b>Cadastrar</b>
        </LoginFooterBox>
      </LoginBox>
    </Main>
  )
}

export default Home
