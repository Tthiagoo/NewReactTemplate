import React from 'react'
import { Box } from '@material-ui/core'
import { GetStaticProps } from 'next'
import stefLogo from '../assets/stef.png'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Main } from '../styles/pages/Home'
import { ButtonCustom } from '../components/atoms/Button'
import LanguageChange from '../components/molecules/LanguageDropDown'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { Input } from '../components/atoms/Input'
import { HeaderLogin } from '../components/molecules/HeaderLogin'
import { TextBox } from '../components/atoms/TextBoxLogin'
import { LoginForm } from '../components/molecules/LoginForm/indext'
import { LoginFooterBox } from '../components/molecules/LoginFooter'

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

  async function handleSignIn(data) {
    console.log(data)
    await signIn(data)
  }

  return (
    <Main>
      <HeaderLogin>
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
      </HeaderLogin>

      <TextBox>{t('home:introducao')}</TextBox>

      <LoginForm onSubmit={handleSubmit(handleSignIn)}>
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

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="40%"
          marginBottom="20px"
        >
          <Input
            {...register('email')}
            id="filled-basic"
            label={t('home:email_corporativo')}
            variant="outlined"
          />
          <Input
            {...register('password')}
            type="password"
            id="filled-basic"
            label={t('home:senha')}
            variant="outlined"
          />
        </Box>
        <ButtonCustom type="submit">Login</ButtonCustom>
        <LoginFooterBox>
          <b>{t('home:esqueci_senha')}</b>
          <b>{t('home:cadastrar')}</b>
        </LoginFooterBox>
      </LoginForm>
    </Main>
  )
}

export default Home
