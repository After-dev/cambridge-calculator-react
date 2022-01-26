import styled from 'styled-components'


export const Container = styled('div')`
  position: absolute;
  bottom: 10px;

  & button {
    margin-left: 20px;
  }

  & button:first-child {
    margin-left: 0;
  }
`