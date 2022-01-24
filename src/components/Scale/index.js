import {
  Container,
  ScaleContainer,
  CategoriesContainer,
  Category,
  LevelsContainer,
  LevelsHorizontalLine,
  Level,
  MarksContainer,
  Mark,
  LabelsContainer,
  Label,
  FinalLabel
} from './styles'


export default function Scale({reading, useOfEnglish, writing, listening, speaking, final}) {
  return(
    <Container>
      <ScaleContainer>
        <CategoriesContainer>
          <Category active={final>=180}>PROFICIENT</Category>
          <Category active={140<=final && final<180}>INDEPENDENT</Category>
          <Category active={100<=final && final<140}>BASIC</Category>
          <Category active={final<100}></Category>
        </CategoriesContainer>

        <LevelsContainer>
          <div>
            <LevelsHorizontalLine />
            <Level active={final>200}>C2</Level>
            <LevelsHorizontalLine />
            <Level active={180<=final && final<200}>C1</Level>
            <LevelsHorizontalLine />
            <Level active={160<=final && final<180}>B2</Level>
            <LevelsHorizontalLine />
            <Level active={140<=final && final<160}>B1</Level>
            <LevelsHorizontalLine />
            <Level active={120<=final && final<140}>A2</Level>
            <LevelsHorizontalLine />
            <Level active={100<=final && final<120}>A1</Level>
            <LevelsHorizontalLine />
            <Level active={final<100}>{'<'}A1</Level>
            <LevelsHorizontalLine />
          </div>
        </LevelsContainer>

        <MarksContainer>
          {[...Array(151)].map( (_, i) => {
            let size = i%10==0 ? 'large' : i%5==0 ? 'medium' : 'small'
            return <Mark key={i}
                      size={size}
                      onClick={()=>console.log(80+i)} >
                      <span>{i%10==0 && i!=0 ? 80+i : ''}</span>
                   </Mark>
          })}
        </MarksContainer>
      </ScaleContainer>
          
      <LabelsContainer>
        <Label color='lightgreen' mark={reading}>
          <div />
          <span>Reading</span>
        </Label>
        {useOfEnglish ?
          <Label color='lightblue' mark={useOfEnglish}>
            <div />
            <span>UseOfEnglish</span>
          </Label>
          : ''
        }
        <Label color='yellow' mark={writing}>
          <div />
          <span>Writing</span>
        </Label>
        <Label color='cyan' mark={listening}>
          <div />
          <span>Listening</span>
        </Label>
        <Label color='tomato' mark={speaking}>
          <div />
          <span>Speaking</span>
        </Label>
      </LabelsContainer>
      <FinalLabel mark={final} />
    </Container>
  )
}