import { gql } from 'apollo-server-express'

const typeDefs = gql`

  type Problem {
    questionType: String
    answerType: String
    questionId: Int
    content: String
    answers: [String]
  }

  type Query {
    problems: [Problem]
  }

  type Subscription {
    problems: [Problem]
  }
`

export default typeDefs
