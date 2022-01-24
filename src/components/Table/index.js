import {
  TableContainer,
  RowStyled,
  FieldStyled
} from './styles'
import { useDispatch } from 'react-redux'
import { actionUpdate } from '../../redux/dataReducer'


export default function Table({table, titles, data, selectedRow, setSelectedStudent}) {
  const dispatch = useDispatch()

  function handleChange(e, row, col) {
    let newVal = col==0 ? e.target.value : parseInt(e.target.value)
    dispatch(actionUpdate(table, row, col, newVal))
  }

  return (
    <TableContainer>
      <thead>
        <tr>
          {titles.map((title, col) => {
            if (col===2 && ['A2','B1'].includes(table)){
              return ''
            }
            return <th key={col}>{title}</th>
          })}
        </tr>
      </thead>
      
      <tbody>
        {data.map( (rowData, row) => {
          return <RowStyled key={row} selected={selectedRow===row} >
            {rowData.map( (_, col) => {
              if (col===2 && ['A2','B1'].includes(table)){
                return ''
              }
              return <td key={`${row}-${col}`}>
                <FieldStyled
                  type={col==0 ? 'text' : 'number'}
                  value={data[row][col]}
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