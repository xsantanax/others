import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
`
export const A4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`
export const VertSpaceTop = styled.div`
  height: 25px;
  @media print {
    display: none;
  }
`
export const Name = styled.div`
  border-bottom: 2px solid #263192;
  font-size: 60px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: 24px;
`
export const Horizontal = styled.div`
  display: flex;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
`
export const Space = styled.div`
  width: 5%;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
`
export const VertSpace = styled.div`
  height: 18px;
`
export const VertSpaceBottom = styled.div`
  height: 40px;
  @media print {
    display: none;
  }
`
