import styled from 'styled-components'


export const Container = styled('div')`
  background: green;
  position: absolute;
  top: 150px;

  & button {
    margin-left: 20px;
  }

  & button:first-child {
    margin-left: 0;
  }
`