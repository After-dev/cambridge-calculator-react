export const actionNew = (table) => {
  return {
    type: '@DATA/NEW',
    payload: {
      table
    }
  }
}

export const actionDelete = (table, row) => {
  return {
    type: '@DATA/DELETE',
    payload: {
      table,
      row
    }
  }
}

export const actionUpdate = (table, row, col, newVal) => {
  return {
    type: '@DATA/UPDATE',
    payload: {
      table,
      row,
      col,
      newVal
    }
  }
}

export const actionClear = (table) => {
  return {
    type: '@DATA/CLEAR',
    payload: {
      table
    }
  }
}

export function dataReducer(state={}, action) {
  let table, row, col, newVal
  let newState, students
  switch(action.type) {
    case '@DATA/NEW':
      table = action.payload.table
      newState = {...state}
      students = [...newState.tables[table].students]
      students.push(['', 0, 0, 0, 0, 0])
      newState.tables[table].students = students
      return newState
    
    case '@DATA/DELETE':
      table = action.payload.table
      row = action.payload.row
      newState = {...state}
      students = [...newState.tables[table].students]
      students.splice(row,1)
      if (students.length === 0) {
        students.push(['', 0, 0, 0, 0, 0])
      }
      newState.tables[table].students = students
      return newState

    case '@DATA/UPDATE':
      table = action.payload.table
      row = action.payload.row
      col = action.payload.col
      newVal = action.payload.newVal
      newState = {...state}
      students = [...newState.tables[table].students]
      students[row][col] = newVal
      newState.tables[table].students = students
      return newState
    
    case '@DATA/CLEAR':
      table = action.payload.table
      newState = {...state}
      students = [['', 0, 0, 0, 0, 0]]
      newState.tables[table].students = students
      return newState

    default:
      return state
  }
}