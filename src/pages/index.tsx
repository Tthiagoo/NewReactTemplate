import { Box } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useCollection } from 'react-firebase-hooks/firestore'
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
import { db } from '../config/firebaseClient'
import { collection, getFirestore } from 'firebase/firestore'

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

  const [users, loading, error] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true }
  })

  if (!loading && users) {
    users.docs.map(doc => console.log(doc.data()))
  }

  async function handleSignIn(data) {
    console.log(data)
    await signIn(data)
  }

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

      <LoginBox onSubmit={handleSubmit(handleSignIn)}>
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
            {...register('email')}
            id="filled-basic"
            label={t('home:email_corporativo')}
            variant="outlined"
          />
          <InputLogin
            {...register('password')}
            type="password"
            id="filled-basic"
            label={t('home:senha')}
            variant="outlined"
          />
        </FormLogin>
        <MyButton type="submit">Login</MyButton>
        <LoginFooterBox>
          <b>{t('home:esqueci_senha')}</b>
          <b>{t('home:cadastrar')}</b>
        </LoginFooterBox>
      </LoginBox>
    </Main>
  )
}

export default Home
