import styled from 'styled-components'


export const TableContainer = styled('table')`
  border-collapse: collapse;
  width: 100%;

  & tr td {
    width: 10%;

    & input {
      text-align: center;
    }

    & input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & tr td:first-child {
    width: 60%;

    & input {
      text-align: left;
    }
  }
`

export const RowStyled = styled('tr')`
  background-color: ${props => props.selected ? 'red' : 'none'};
`

export const FieldStyled = styled('input')`
  background-color: rgba(255,255,255,0.8);
  padding: 5px;
  border: 2px solid black;
  font-weight: bold;
  width: 100%;
`