import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Answer {
    type: String
    content: String
    options: [String]
  }

  type Question {
    type: String
    id: Int
    content: String
    answer: Answer
  }

  type Query {
    questions: [Question]
    answer(questionId: Int): Answer
  }

  type Subscription {
    questions: [Question]
  }
`

export default typeDefs
