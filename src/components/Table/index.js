import {
  TableContainer,
  RowStyled,
  FieldStyled
} from './styles'
import { useDispatch } from 'react-redux'
import { actionUpdate } from '../../redux/dataReducer'
import { cambridgePoints } from '../Scale/cambridgePoints'


/**
 * Tabla para mostrar las notas de los alumnos en una categoría
 * 
 * @component
 * @prop {string} table Tabla seleccionada actualmente
 * @prop {string[]} titles Lista de cabeceras de la tabla
 * @prop {int[][]} data Lista de datos de la tabla
 * @prop {int} selectedRow Fila seleccionada
 * @prop {function} setSelectedStudent Función para actualizar la fila seleccionada
 */
function Table({table, titles, data, selectedRow, setSelectedStudent}) {
  const dispatch = useDispatch()

  /**
   * Actualiza los datos al modificar alguna celda de la tabla
   * @param {event} e Evento change
   * @param {int} row Fila de la celda modificada
   * @param {int} col Columna de la celda modificada
   */
  function handleChange(e, row, col) {
    let newVal = col===0 ? e.target.value : parseInt(e.target.value)
    dispatch(actionUpdate(table, row, col, newVal))
  }

  return (
    <TableContainer>
      <thead>
        <tr>
          {titles.map((title, col) => {
            // Ocultar columna useOfEnglish en categorías A2 y B1
            if (col===2 && ['A2','B1'].includes(table)){
              return undefined
            }
            return <th key={col}>{title}</th>
          })}
        </tr>
      </thead>
      
      <tbody>
        {data.map( (rowData, row) => {
          return <RowStyled key={row} selected={selectedRow===row} >
            {rowData.map( (_, col) => {
              // Ocultar columna useOfEnglish en categorías A2 y B1
              if (col===2 && ['A2','B1'].includes(table)){
                return undefined
              }
              return <td key={`${row}-${col}`}>
                <FieldStyled
                  type={col===0 ? 'text' : 'number'}
                  value={data[row][col]}
                  success={col>0 && data[row][col] >= cambridgePoints[table].minPoints[titles[col].toLowerCase()]}
                  onChange={e=>handleChange(e, row, col)}
                  onFocus={()=>setSelectedStudent(row)} />
              </td>
            })}
          </RowStyled>
        })}
      </tbody>
    </TableContainer>
  )
}

export default Table