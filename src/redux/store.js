import { createStore } from 'redux'
import { dataReducer } from './dataReducer'

const initialState = {
  tables: localStorage.getItem('tables') ?
    JSON.parse(localStorage.getItem('tables'))
    :
    {
      A2: {
        students: [['', 0, 0, 0, 0, 0]]
      },
      B1: {
        students: [['', 0, 0, 0, 0, 0]]
      },
      B2: {
        students: [['', 0, 0, 0, 0, 0]]
      },
      C1: {
        students: [['', 0, 0, 0, 0, 0]]
      },
      C2: {
        students: [['', 0, 0, 0, 0, 0]]
      }
    }
}

export const store = createStore(dataReducer, initialState)