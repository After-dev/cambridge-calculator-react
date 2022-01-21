import styled from 'styled-components'


export const Container = styled('div')`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`

export const ScaleContainer = styled('div')`
  display: flex;
  width: 70%;
`


export const CategoriesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 10%;

  & div {
    height: 26.5%;
  }

  & div:first-child {
    height: 33.4%;
  }

  & div:last-child {
    height: 13.6%;
  }
`


export const Category = styled('div')`
  background-color: ${props => props.active ? 'red' : 'rgba(242, 241, 240, 1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  transform: rotateZ(180deg);
  writing-mode: vertical-LR;
`


export const LevelsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 45%;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 93.2%;
  }
`


export const LevelsHorizontalLine = styled('div')`
  background-color: rgba(194, 193, 192, 1);
  width: 100%;
  height: 5px;
`


export const Level = styled('div')`
  background-color: ${props => props.active ? 'red' : 'rgba(242, 241, 240, 1)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  z-index: 1;
`


export const MarksContainer = styled('div')`
  background-color: rgba(242, 241, 240, 1);
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: space-around;
  width: 45%;
  height: 100%;
`


export const Mark = styled('div')`
  background: rgba(194, 193, 192, 1);
  width: ${props => props.size=='large' ? '90%' : props.size=='medium' ? '45%' : '20%'};
  height: 0.3%;

  & span {
    font-size: 15px;
    font-weight: bold;
  }
`


export const LabelsContainer = styled('div')`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  width: 30%;
`


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


export const FinalLabel = styled('div')`
  border-top: 3px solid red;
  margin-left: 7%;
  position: absolute;
  bottom: ${props => `${(props.mark-80)*0.662}%`};
  width: 93%;
  height: 0;
`