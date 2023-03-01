import ExperienceItem from '../ExperienceItem'
import * as S from './styles'

const Experience = () => (
  <S.Container>
    <S.Title>Experience</S.Title>
    <ExperienceItem
      role="Software Engineer at Divisio (Mar/2021 - now)"
      line1="Build apps using react and aws ecosystem."
      line2="Main tools: Next.js, AWS, RDS, Postgres, GraphQL, Typescript, Apollo, Express, Node, React."
    />
    <ExperienceItem
      role="Software Engineer at Politik (Dec/2017 - now)"
      line1="Started Politik to politically organize people."
      line2="Main tools: React Native, Firebase, Typescript, Express, Node, GCP, React, Next.js."
    />
    <ExperienceItem
      role="Business Analyst at Nubank (Jul/2019 - Dec/2019)"
      line1="Extracted fraud prevention rules from data lakes using machine learning."
      line2="Main tools: Python, SQL, Spark, Scala, BigQuery."
    />
    <ExperienceItem
      role="Business Analyst at Mastercard (Jul/2016 - Nov/2016)"
      line1="Conducted interviews to understand clients needs."
      line2="Analyzed data to extract insights and support business decisions."
    />
  </S.Container>
)

export default Experience
