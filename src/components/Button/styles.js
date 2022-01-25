import styled from 'styled-components'


export const ButtonStyled = styled('button')`
  background-color: ${props => props.color};
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: 0.2s all;

  &:active {
    transform: scale(0.8);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`