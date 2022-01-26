import styled from 'styled-components'
import { bps } from '../../styles'


export const ButtonStyled = styled('button')`
  background-color: ${props => props.color};
  border: 3px solid black;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;
  transition: 0.2s all;

  & svg {
    fill: black;
  }

  &:hover {
    transform: scale(1.3);
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  ${bps.tablet}{
    width: 30px;
    height: 30px;

    & svg {
      width: 14px;
      height: 14px;
    }
  }
`