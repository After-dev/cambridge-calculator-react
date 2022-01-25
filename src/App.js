import './App.css';
import { useEffect, useState } from 'react'
import Table from './components/Table'
import Scale from './components/Scale'
import FloatingMenu from './components/FloatingMenu'
import { useSelector } from 'react-redux'
import { selectTables, selectTableStudents } from './redux/dataSelectors'
import { getPercentages, getCambridgeMark } from './utils'
import {
  Container,
  Header,
  Content,
  DataSection,
  TabsSection,
  Tab,
  TableSection,
  InfoSection,
  StudentResult,
  StudentMark
} from './styles'

function App() {
  const [table, setTable] = useState('B1')
  const [selectedStudent, setSelectedStudent] = useState(0)
  const [readingMark, setReadingMark] = useState(-1)
  const [useOfEnglishMark, setUseOfEnglishMark] = useState(-1)
  const [writingMark, setWritingMark] = useState(-1)
  const [listeningMark, setListeningMark] = useState(-1)
  const [speakingMark, setSpeakingMark] = useState(-1)
  const [finalMark, setFinalMark] = useState(-1)
  const data = useSelector(state => selectTableStudents(state, table))
  const tables = useSelector(selectTables)

  useEffect(() => {
    localStorage.setItem('tables', JSON.stringify(tables))
  }, [data])

  useEffect(() => {
    if (selectedStudent >= data.length){
      setSelectedStudent(data.length-1)
      return
    }
    let {reading, useOfEnglish, writing, listening, speaking} = getPercentages(
      table,
      data[selectedStudent][1],
      data[selectedStudent][2],
      data[selectedStudent][3],
      data[selectedStudent][4],
      data[selectedStudent][5]
    )

    setReadingMark(getCambridgeMark(table, reading))
    setUseOfEnglishMark(getCambridgeMark(table, useOfEnglish))
    setWritingMark(getCambridgeMark(table, writing))
    setListeningMark(getCambridgeMark(table, listening))
    setSpeakingMark(getCambridgeMark(table, speaking))
    if (['A2','B1'].includes(table)) {
      setFinalMark(getCambridgeMark(table, (reading+writing+listening+speaking)/4))
    } else {
      setFinalMark(getCambridgeMark(table, (reading+useOfEnglish+writing+listening+speaking)/5))
    }
  }, [selectedStudent, data])

  function changeTab(tab) {
    setSelectedStudent(0)
    setTable(tab)
  }

  return (
    <Container>
      <Header>
        <span>Cambridge Calculator</span>
        <FloatingMenu
          table={table}
          selectedStudent={selectedStudent} />
      </Header>
      <Content>
        <DataSection>
          <TabsSection>
            {['A2','B1','B2','C1','C2'].map(tab => {
              return <Tab
                       key={tab}
                       active={table===tab}
                       onClick={()=>changeTab(tab)}>
                       {tab}
                      </Tab>
            })}
          </TabsSection>
          <TableSection>
            <Table
              table={table}
              titles={['Student', 'Reading', 'UseOfEn', 'Writing', 'Listening', 'Speaking']}
              data={data}
              selectedRow={selectedStudent}
              setSelectedStudent={setSelectedStudent} />
          </TableSection>
        </DataSection>
        <InfoSection>
          <StudentResult>Result: {finalMark}</StudentResult>
          <StudentMark>
            <Scale
              reading={readingMark}
              useOfEnglish={useOfEnglishMark}
              writing={writingMark}
              listening={listeningMark}
              speaking={speakingMark}
              final={finalMark}
              />
          </StudentMark>
        </InfoSection>
      </Content>
    </Container>
  );
}

export default App;
