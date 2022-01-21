import styled from 'styled-components'


export const ButtonStyled = styled('button')`
  background-color: green;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: center;
  width: 50px;
  height: 50px;
  transition: 0.2s all;

  &:active {
    transform: scale(0.8);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`