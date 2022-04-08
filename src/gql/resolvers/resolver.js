import { PubSub } from 'graphql-subscriptions'

import mockGames from '../../mockGame.json'

const pubsub = new PubSub()

const resolver = {
  Query: {
    questions: () => {
      return mockGames.questions
    },
  },
  Subscription: {
    questions: {
      subscribe: () => pubsub.asyncIterator('QUESTIONS'),
    },
  },
}
export default resolver
