import { createStore } from 'redux'
import { dataReducer } from './dataReducer'

const initialState = {
  tables: [{
    name: 'A2',
    students: [['', 0, 0, 0, 0]]
  },
  {
    name: 'B1',
    students: [
      ['Marcos', 28, 38, 24, 29],
      ['María', 24, 29, 16, 22],
      ['Isaac', 18, 27, 15, 20],
      ['Hugo', 26, 37, 15, 27],
      ['Ramón', 24, 32, 22, 27],
      ['Nerea', 9, 10, 7, 7],
      ['Nazaret', 16, 27, 12, 23]
    ]
  },
  {
    name: 'B2',
    students: [['', 0, 0, 0, 0]]
  },
  {
    name: 'C1',
    students: [['', 0, 0, 0, 0]]
  },
  {
    name: 'C2',
    students: [['', 0, 0, 0, 0]]
  }]
}

export const store = createStore(dataReducer, initialState)