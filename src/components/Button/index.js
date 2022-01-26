import {
  ButtonStyled
} from './styles'


/**
 * Botón del menú superponible (redondo con icono)
 * 
 * @component
 * @prop {Icon} icon Icono que se situa en el botón
 * @prop {string} color Color de fondo para el botón
 * @prop {function} onClick Función que se ejecuta al hacer clic
 */
function Button({icon, color, onClick}) {
  return (
    <ButtonStyled
      color={color}
      onClick={onClick} >
        {icon}
    </ButtonStyled>
  )
}

export default Button