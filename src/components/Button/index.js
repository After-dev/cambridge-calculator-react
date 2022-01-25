import {
  ButtonStyled
} from './styles'


export default function Button({icon, color, onClick}) {
  return (
    <ButtonStyled
      color={color}
      onClick={onClick} >
      {icon}
    </ButtonStyled>
  )
}