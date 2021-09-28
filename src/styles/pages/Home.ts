import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
export const Main = styled.div`
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
export const Header = styled.div`
  width: 100%;
  height: 5%;

  padding: 10px;
`
