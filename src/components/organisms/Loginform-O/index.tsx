/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Box } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../contexts/AuthContext'
import { ButtonCustom } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import LoginFooter from '../../molecules/LoginFooter'
import { LoginFormBox } from './styles'

export default function LoginForm({ translation }) {
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth()

  async function handleSignIn(data) {
    console.log(data)
    await signIn(data)
  }
  return (
    <LoginFormBox onSubmit={handleSubmit(handleSignIn)}>
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
          label={translation('home:email_corporativo')}
          variant="outlined"
        />
        <Input
          {...register('password')}
          type="password"
          id="filled-basic"
          label={translation('home:senha')}
          variant="outlined"
        />
      </Box>
      <ButtonCustom type="submit">Login</ButtonCustom>
      <LoginFooter translation={translation} />
    </LoginFormBox>
  )
}
