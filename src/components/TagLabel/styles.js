import styled from 'styled-components'


export const Label = styled('div')`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: ${props => `${(props.mark-80)*0.683}%`};
  min-height: 1.5%;

  & div {
    border-color: transparent ${props => props.color} transparent transparent;
    border-style: solid;
    border-width: 9px 9px 9px 0;
    width: 0;
    height: 0;
  }

  & span {
    background: ${props => props.color};
    user-select: none;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    padding-left: 5px;
    width: 90%;
  }
`