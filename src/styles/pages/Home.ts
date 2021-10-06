// import { ThemeOptions } from '@mui/material/styles'
import { styled as MuiStyled } from '@material-ui/styles'
import { Button, Box, TextField } from '@material-ui/core'
import imageLogin from '../../assets/imageLogin.png'
import styled from 'styled-components'
import { styledCustom } from '../../theme/themeMui'
export const MyThemeComponent = styledCustom('div')(({ theme }) => ({
  backgroundColor: theme.status.danger
}))

export const MyButton = MuiStyled(Button)({
  background: 'linear-gradient(45deg, #0943F9 20%, #0990F9 70%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  maringTop: '30px'
})

export const Main = MuiStyled(Box)({
  height: '100vh',
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundImage: `url(${imageLogin})`
})

export const Header = MuiStyled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  width: '100%',
  height: '12%'
})
export const TextBox = MuiStyled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  textAlign: 'center',
  width: '50%',
  height: '12%'
})

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 35%;
  height: 50%;
  background-color: white;
  border-radius: 5px;
`

export const InputBox = MuiStyled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '40%',
  marginBottom: '20px'
})

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  margin-bottom: 20px;
`

export const LoginFooterBox = MuiStyled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  justifySelf: 'center',
  marginTop: '20px',
  color: '#0990F9'
})

export const InputLogin = MuiStyled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green'
  }
})
export const MainStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
