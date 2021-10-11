// import { ThemeOptions } from '@mui/material/styles'
import { styled as MuiStyled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import imageLogin from '../../assets/imageLogin.png'
import styled from 'styled-components'
import { styledCustom } from '../../theme/themeMui'
export const MyThemeComponent = styledCustom('div')(({ theme }) => ({
  backgroundColor: theme.status.danger
}))
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
