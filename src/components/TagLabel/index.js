import {
  Label
} from './styles'


export default function TagLabel({tag, color, mark}) {
  return(
    <Label color={color} mark={mark}>
      <div />
      <span>{tag}</span>
    </Label>
  )
}