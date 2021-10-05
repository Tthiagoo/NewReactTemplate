import { Box } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import React from 'react'
import stefLogo from '../assets/stef.png'
import {
  LoginBox,
  Header,
  Main,
  MyButton,
  TextBox,
  LoginFooterBox,
  InputLogin,
  FormLogin
} from '../styles/pages/Home'
import LanguageChange from '../shared/LanguageChange'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'

export const getStaticProps: GetStaticProps = async ({
  locale: staticLocale
}) => {
  return {
    props: {
      ...(await serverSideTranslations(staticLocale, ['home']))
    }
  }
}

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth()
  return (
    <Main>
      <Header>
        <img
          src={stefLogo}
          style={{
            width: '30%',
            height: '55%',
            margin: '0 auto',
            display: 'block'
          }}
        />

        <LanguageChange />
      </Header>
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

        <FormLogin>
          <InputLogin
            id="filled-basic"
            label={t('home:email_corporativo')}
            variant="outlined"
          />
          <InputLogin
            type="password"
            id="filled-basic"
            label={t('home:senha')}
            variant="outlined"
          />
        </FormLogin>
        <MyButton>Login</MyButton>
        <LoginFooterBox>
          <b>{t('home:esqueci_senha')}</b>
          <b>{t('home:cadastrar')}</b>
        </LoginFooterBox>
      </LoginBox>
    </Main>
  )
}

export default Home
