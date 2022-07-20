import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Option {
    type: String
    content: String
  }

  type Answer {
    id: Int
    type: String
    details: [String]
    content: String
    options: [Option]
  }

  type Question {
    type: String
    id: Int
    content: String
    options: [Option]
  }

  type Game {
    id: Int
    title: String
    description: String
    questions: [Question]
  }

  type Query {
    games: [Game]
    questions: [Question]
    answers(gameId: Int): [Answer]
    answer(questionId: Int): Answer
  }

  type Subscription {
    questions: [Question]
  }
`

export default typeDefs
