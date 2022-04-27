import React from 'react'
import { GetStaticProps } from 'next'
import stefLogo from '../assets/stef.png'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Main } from '../styles/pages/Home'
import LanguageChange from '../components/molecules/LanguageDropDown'
import { HeaderLogin } from '../components/molecules/HeaderLogin'
import { TextBox } from '../components/atoms/TextBoxLogin'
import LoginForm from '../components/organisms/Loginform-O'
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
      <LoginForm translation={t} />
    </Main>
  )
}

export default Home
