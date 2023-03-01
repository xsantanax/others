import Image from 'next/image'
import * as S from './styles'

const Contact = () => (
  <S.Container>
    <S.Title>Contact</S.Title>

    <S.ContactItem>
      <Image width={26} height={26} src="/smartphone.svg" />
      <S.Text>(14) 99162-7581</S.Text>
    </S.ContactItem>

    <S.VertSpace />
    <S.ContactItem>
      <Image width={26} height={26} src="/mail.svg" />
      <S.Text>rafaelsantana111@gmail.com</S.Text>
    </S.ContactItem>

    <S.ContactItem>
      <Image width={26} height={26} src="/location.svg" />
      <S.Text>Lins - SP, Brasil</S.Text>
    </S.ContactItem>

    <S.ContactItem>
      <Image width={26} height={26} src="/github-logo.svg" />
      <S.Text>github.com/xsantanax</S.Text>
    </S.ContactItem>
  </S.Container>
)

export default Contact
