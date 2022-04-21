import { PubSub } from 'graphql-subscriptions'

import mockGames from '../../mockGame.json'

const pubsub = new PubSub()

const resolver = {
  Query: {
    questions: () => {
      pubsub.publish('QUESTIONS', { questions: mockGames.questions })
      return mockGames.questions
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
