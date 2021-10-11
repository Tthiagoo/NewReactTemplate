import { styled as MuiStyled } from '@material-ui/styles'
import { TextField } from '@material-ui/core'

export const Input = MuiStyled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#0990F9'
    }
  }
})
