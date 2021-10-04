import { Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { GetStaticProps } from 'next'
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
  InputLogin
} from '../styles/pages/Home'

export const getStaticProps: GetStaticProps = async ({
  locale: staticLocale
}) => {
  console.log(staticLocale)
  return {
    props: {
      ...(await serverSideTranslations(staticLocale, ['home']))
    }
  }
}

const Home: React.FC = () => {
  const { asPath } = useRouter()
  // serverSideTranslations(locale, ['home'])
  const { t } = useTranslation()

  return (
    <Main>
      <Header>
        <img src={stefLogo} style={{ width: '30%', height: '55%' }} />
      </Header>
      {t('home:bem_vindo')}
      <Link href={asPath} locale="en">
        en
      </Link>
      <Link href={asPath} locale="pt-BR">
        Br
      </Link>
      <TextBox>{t('home:introducao')}</TextBox>

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
