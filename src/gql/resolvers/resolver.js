// import { PubSub } from 'graphql-subscriptions';

import mockGames from '../../mockGame.json'

const resolver = {
  Query: {
    questions: () => {
      return mockGames.questions
    }
  },
  Subscription: {
    questions: {
      subscribe: () => pubsub.asyncIterator('PROBLEMS'),
    }
  }
};
export default resolver
