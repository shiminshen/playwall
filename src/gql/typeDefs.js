import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Problem {
    questionType: String
    answerType: String
    questionId: Int
    content: String
    answers: String
  }
  type Query {
    problems: [Problem]
  }
`

export default typeDefs
