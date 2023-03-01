import ExperienceItem from '../ExperienceItem'
import * as S from './styles'

const Education = () => (
  <S.Container>
    <S.Title>Education</S.Title>
    <ExperienceItem
      role="University of São Paulo - São Carlos (2011 - 2019)"
      line1="B.S. in Electrical and Electronics Engineering."
    />
    <ExperienceItem
      role="Illinois Institute of Technology - Chicago (2013)"
      line1="Professional English. (Exchange Program)"
    />
    <ExperienceItem
      role="University of California - Berkeley (2014)"
      line1="Electrical and Electronics Engineering. (Exchange Program)"
    />
  </S.Container>
)

export default Education
