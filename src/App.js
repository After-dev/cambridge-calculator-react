import './App.css';
import { useEffect, useState } from 'react'
import Table from './components/Table'
import Scale from './components/Scale'
import { useSelector } from 'react-redux'
import { selectTableStudents } from './redux/dataSelectors'
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
import FloatingButton from './components/FloatingButton';
import { getPercentages, getCambridgeMark } from './components/Scale/marks'

function App() {
  const [table, setTable] = useState(1)
  const [selectedStudent, setSelectedStudent] = useState(0)
  const [readingMark, setReadingMark] = useState(-1)
  const [writingMark, setWritingMark] = useState(-1)
  const [listeningMark, setListeningMark] = useState(-1)
  const [speakingMark, setSpeakingMark] = useState(-1)
  const [finalMark, setFinalMark] = useState(-1)
  const data = useSelector(state => selectTableStudents(state, table))

  useEffect(() => {
    let {reading, writing, listening, speaking} = getPercentages(
      table,
      data[selectedStudent][1],
      data[selectedStudent][2],
      data[selectedStudent][3],
      data[selectedStudent][4]
    )

    setReadingMark(getCambridgeMark(table, reading))
    setWritingMark(getCambridgeMark(table, writing))
    setListeningMark(getCambridgeMark(table, listening))
    setSpeakingMark(getCambridgeMark(table, speaking))
    setFinalMark(getCambridgeMark(table, (reading+writing+listening+speaking)/4))
  }, [selectedStudent, data])

  function changeTab(tab) {
    setSelectedStudent(0)
    setTable(tab)
  }

  return (
    <Container>
      <Header>
        <span>Cambridge Calculator</span>
      </Header>
      <Content>
        <DataSection>
          <TabsSection>
            {/*<Tab active={table===0} onClick={()=>changeTab(0)}>A2</Tab>*/}
            <Tab active={table===1} onClick={()=>changeTab(1)}>B1</Tab>
            {/*<Tab active={table==2} onClick={()=>changeTab(2)}>B2</Tab>*/}
            {/*<Tab active={table==3} onClick={()=>changeTab(3)}>C1</Tab>*/}
            {/*<Tab active={table==4} onClick={()=>changeTab(4)}>C2</Tab>*/}
          </TabsSection>
          <TableSection>
            <Table
              table={table}
              titles={['Student', 'Reading', 'Writing', 'Listening', 'Speaking']}
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
              writing={writingMark}
              listening={listeningMark}
              speaking={speakingMark}
              final={finalMark}
              />
          </StudentMark>
        </InfoSection>
      </Content>
      <FloatingButton table={table} />
    </Container>
  );
}

export default App;
