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
import { getPercentages, getCambridgeMark } from './utils'

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

  useEffect(() => {
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
      </Header>
      <Content>
        <DataSection>
          <TabsSection>
            <Tab active={table==='A2'} onClick={()=>changeTab('A2')}>A2</Tab>
            <Tab active={table==='B1'} onClick={()=>changeTab('B1')}>B1</Tab>
            <Tab active={table=='B2'} onClick={()=>changeTab('B2')}>B2</Tab>
            {/*<Tab active={table=='C1'} onClick={()=>changeTab('C1')}>C1</Tab>*/}
            {/*<Tab active={table=='C2'} onClick={()=>changeTab('C2')}>C2</Tab>*/}
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
      <FloatingButton table={table} />
    </Container>
  );
}

export default App;
