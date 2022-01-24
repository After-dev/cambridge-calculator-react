import { cambridgeScores } from './components/Scale/cambridgeScores'
import { cambridgePoints } from './components/Scale/cambridgePoints'


export function getPercentages(table, reading, useOfEnglish, writing, listening, speaking) {
  if (table in cambridgePoints) {
    reading = reading/cambridgePoints[table].maxPoints.reading*100
    useOfEnglish = useOfEnglish/cambridgePoints[table].maxPoints.useOfEnglish*100
    writing = writing/cambridgePoints[table].maxPoints.writing*100
    listening = listening/cambridgePoints[table].maxPoints.listening*100
    speaking = speaking/cambridgePoints[table].maxPoints.speaking*100

  } else {
    reading = 0
    useOfEnglish = 0
    writing = 0
    listening = 0
    speaking = 0
  }

  return {reading, useOfEnglish, writing, listening, speaking}
}


export function getCambridgeMark(table, percentage) {
  let cambridgeMark = 0

  percentage = parseInt(percentage)
  if (percentage in cambridgeScores[table]){
    cambridgeMark = cambridgeScores[table][percentage]
  }
  
  return cambridgeMark
}