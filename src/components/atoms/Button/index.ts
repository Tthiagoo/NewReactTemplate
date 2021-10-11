import { styled as MuiStyled } from '@material-ui/styles'
import { Button } from '@material-ui/core'

import { styledCustom } from '../../../theme/themeMui'
export const MyThemeComponent = styledCustom('div')(({ theme }) => ({
  backgroundColor: theme.status.danger
}))

export const ButtonCustom = MuiStyled(Button)({
  background: 'linear-gradient(45deg, #0943F9 20%, #0990F9 70%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  maringTop: '30px'
})
