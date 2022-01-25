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
  switch(action.type) {
    case '@DATA/NEW':
      var table = action.payload.table
      var newState = {...state}
      var students = [...newState.tables[table].students]
      students.push(['', 0, 0, 0, 0, 0])
      newState.tables[table].students = students
      return newState
    
    case '@DATA/DELETE':
      var {table, row} = action.payload
      var newState = {...state}
      var students = [...newState.tables[table].students]
      students.splice(row,1)
      if (students.length === 0) {
        students.push(['', 0, 0, 0, 0, 0])
      }
      newState.tables[table].students = students
      return newState

    case '@DATA/UPDATE':
      var {table, row, col, newVal} = action.payload
      var newState = {...state}
      var students = [...newState.tables[table].students]
      students[row][col] = newVal
      newState.tables[table].students = students
      return newState
    
    case '@DATA/CLEAR':
      var table = action.payload.table
      var newState = {...state}
      console.log(newState.tables)
      var students = [['', 0, 0, 0, 0, 0]]
      newState.tables[table].students = students
      return newState

    default:
      return state
  }
}