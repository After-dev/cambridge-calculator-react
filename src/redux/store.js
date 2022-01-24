import { createStore } from 'redux'
import { dataReducer } from './dataReducer'

const initialState = {
  tables: {
    A2: {
      students: [['', 0, 0, 0, 0, 0]]
    },
    B1: {
      students: [
        ['Marcos', 28, 0, 38, 24, 29],
        ['María', 24, 0, 29, 16, 22],
        ['Isaac', 18, 0, 27, 15, 20],
        ['Hugo', 26, 0, 37, 15, 27],
        ['Ramón', 24, 0, 32, 22, 27],
        ['Nerea', 9, 0, 10, 7, 7],
        ['Nazaret', 16, 0, 27, 12, 23]
      ]
    }
  }
}

export const store = createStore(dataReducer, initialState)