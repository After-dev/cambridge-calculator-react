import {
  ButtonStyled
} from './styles'
import { useDispatch } from 'react-redux'
import { actionNew } from '../../redux/dataReducer'


export default function FloatingButton({table}) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(actionNew(table))
  }

  return (
    <ButtonStyled
      onClick={handleClick}  >
      +
    </ButtonStyled>
  )
}