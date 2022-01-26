import {
  Container
} from './styles'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { actionNew, actionDelete, actionClear } from '../../redux/dataReducer'

import { Icon } from 'react-icons-kit'
import {userPlus} from 'react-icons-kit/fa/userPlus'
import {userTimes} from 'react-icons-kit/fa/userTimes'
import {trash} from 'react-icons-kit/fa/trash'


/**
 * Menú superponible que contiene los botones de acciones
 * 
 * @component
 * @prop {string} table Tabla seleccionada actualmente
 * @prop {int} selectedStudent Posición en la tabla del estudiante seleccionado
 */
function FloatingMenu({table, selectedStudent}) {
  const dispatch = useDispatch()

  /**
   * Añadir nuevo estudiante a la tabla seleccionada
   */
  function addNewStudent() {
    dispatch(actionNew(table))
  }

  /**
   * Eliminar estudiante seleccionado de la tabla seleccionada
   */
  function deleteStudent() {
    dispatch(actionDelete(table, selectedStudent))
  }

  /**
   * Eliminar todos los estudiantes de la tabla seleccionada
   */
  function clearStudent() {
    dispatch(actionClear(table))
  }

  return(
    <Container>
      <Button
        icon={<Icon size={24} icon={userPlus} />}
        color={'rgb(0,255,0)'}
        onClick={addNewStudent} />
      <Button
        icon={<Icon size={24} icon={userTimes} />}
        color={'rgb(255,0,0)'}
        onClick={deleteStudent} />
      <Button
        icon={<Icon size={24} icon={trash} />}
        color={'rgb(210,105,30)'}
        onClick={clearStudent} />
    </Container>
  )
}

export default FloatingMenu