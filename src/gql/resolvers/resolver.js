import { PubSub } from 'graphql-subscriptions'

import mockGames from '../../mockGames.json'
import mockQuestions from '../../mockQuestions.json'

const pubsub = new PubSub()

const resolver = {
  Query: {
    games: () => {
      return mockGames.games
    },
    questions: () => {
      pubsub.publish('QUESTIONS', { questions: mockQuestions.questions })
      return mockQuestions.questions
    },
  },
  Subscription: {
    questions: {
      subscribe: () => {
        return pubsub.asyncIterator('QUESTIONS')
      },
    },
  },
}
export default resolver
