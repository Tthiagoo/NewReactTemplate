import { Box } from '@material-ui/core'
import { styled as MuiStyled } from '@material-ui/styles'

export const TextBox = MuiStyled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  textAlign: 'center',
  width: '50%',
  height: '12%'
})
