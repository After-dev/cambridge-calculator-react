import styled from 'styled-components'


export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`


export const Header = styled('div')`
  background-color: cyan;
  background-image: url('header.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;

  & span {
    color: black;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 3px 3px rgba(0,0,0,0.4);
  }
`


export const Content = styled('div')`
  background-image: url('f1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
  height: 100%;
`


export const DataSection = styled('div')`
  background-color: rgba(255,255,255,0.2);
  display: flex;
  flex-direction: column;
  width: 48%;
`


export const TabsSection = styled('div')`
  border-bottom: 2px solid black;
  display: flex;
`


export const Tab = styled('span')`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  width: 100%;

  ${ props => {
    const active = props.active
    return `
      background-color: ${active ? 'rgba(255,0,0,0.8)' : 'transparent'};
    `
  }}
`


export const TableSection = styled('div')`
  overflow: scroll;
  margin-top: 10px;
`


export const InfoSection = styled('div')`
  background-color: rgba(255,255,255,0.2);
  display: flex;
  flex-direction: column;
  width: 48%;
`


export const StudentResult = styled('div')`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  height: 8%;

`


export const StudentMark = styled('div')`
  width: 100%;
  height: 92%;
`