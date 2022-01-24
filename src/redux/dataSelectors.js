export const selectTables = (state) => state.tables

export const selectTable = (state, table) => state.tables[table]

export const selectTableStudents = (state, table) => state.tables[table].students

export const selectTableStudentMarks = (state, table, row) => state.tables[table].students[row]

export const selectTableStudentMark = (state, table, row, col) => state.tables[table].students[row][col]