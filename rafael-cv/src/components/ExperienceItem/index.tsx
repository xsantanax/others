import * as S from './styles'

type Props = {
  role: string
  line1?: string
  line2?: string
  line3?: string
}

const ExperienceItem = ({ role, line1, line2, line3 }: Props) => (
  <S.Container>
    <S.Horizontal>
      <S.Role>{role}</S.Role>
      <S.Fill />
    </S.Horizontal>
    <S.Description>
      {line1} {line1 && <br />}
      {line2} {line2 && <br />}
      {line3} {line3 && <br />}
    </S.Description>
  </S.Container>
)

export default ExperienceItem
