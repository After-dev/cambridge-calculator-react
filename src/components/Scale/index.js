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
  FinalLabel
} from './styles'
import TagLabel from '../TagLabel'


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
            let size = i%10===0 ? 'large' : i%5===0 ? 'medium' : 'small'
            return <Mark key={i}
                      size={size}
                      onClick={()=>console.log(80+i)} >
                      <span>{i%10===0 && i!==0 ? 80+i : ''}</span>
                   </Mark>
          })}
        </MarksContainer>
      </ScaleContainer>
          
      <LabelsContainer>
        <TagLabel
          tag='Reading'
          color='lightgreen'
          mark={reading} />

        {useOfEnglish ?
          <TagLabel
            tag='UseOfEnglish'
            color='lightblue'
            mark={useOfEnglish} />
          : ''
        }

        <TagLabel
          tag='Writing'
          color='yellow'
          mark={writing} />
        
        <TagLabel
          tag='Listening'
          color='cyan'
          mark={listening} />
        
        <TagLabel
          tag='Speaking'
          color='tomato'
          mark={speaking} />
      </LabelsContainer>
      <FinalLabel mark={final} />
    </Container>
  )
}