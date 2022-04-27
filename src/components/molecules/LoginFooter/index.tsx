import React from 'react'
import { LoginFooterBox } from './styles'

export default function LoginFooter({ translation }) {
  return (
    <LoginFooterBox>
      <b>{translation('home:esqueci_senha')}</b>
      <b>{translation('home:cadastrar')}</b>
    </LoginFooterBox>
  )
}
