import * as S from './styles'
import Profile from '../Profile'
import Contact from '../Contact'
import Experience from '../Experience'
import Education from '../Education'

const Resume = () => (
  <S.Container>
    <S.A4>
      <S.VertSpaceTop />
      <S.Name>Rafael Santana</S.Name>
      <S.Horizontal>
        <S.Left>
          <Profile />
        </S.Left>
        <S.Space />
        <S.Right>
          <Contact />
        </S.Right>
      </S.Horizontal>
      <S.VertSpace />
      <Experience />
      <S.VertSpace />
      <Education />
      <S.VertSpaceBottom />
    </S.A4>
  </S.Container>
)

export default Resume
