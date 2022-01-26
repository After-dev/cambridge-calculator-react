import {
  Label
} from './styles'


/**
 * Etiqueta de color para marcar la nota de una parte en la escala Cambridge
 * 
 * @component
 * @prop {string} tag Texto que se muestra en la etiqueta
 * @prop {string} color Color de la etiqueta
 * @prop {int} mark Nota para situar la etiqueta
 */
function TagLabel({tag, color, mark}) {
  return(
    <Label color={color} mark={mark}>
      <div />
      <span>{tag}</span>
    </Label>
  )
}

export default TagLabel