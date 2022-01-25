import {
  Container
} from './styles'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { actionNew, actionDelete } from '../../redux/dataReducer'

import { Icon } from 'react-icons-kit'
import {userPlus} from 'react-icons-kit/fa/userPlus'
import {userTimes} from 'react-icons-kit/fa/userTimes'


export default function FloatingMenu({table, selectedStudent}) {
  const dispatch = useDispatch()

  function addNewStudent() {
    dispatch(actionNew(table))
  }

  function deleteStudent() {
    dispatch(actionDelete(table, selectedStudent))
  }

  return(
    <Container>
      <Button
        icon={<Icon size={24} icon={userPlus} />}
        color={'lightgreen'}
        onClick={addNewStudent} />
      <Button
        icon={<Icon size={24} icon={userTimes} />}
        color={'red'}
        onClick={deleteStudent} />
    </Container>
  )
}