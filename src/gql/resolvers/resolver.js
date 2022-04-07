// import { PubSub } from 'graphql-subscriptions';

import mockGames from '../../mockGame.json'

const resolver = {
  Query: {
    problems: () => {
      return mockGames.questions
    }
  },
  Subscription: {
    problems: {
      subscribe: () => pubsub.asyncIterator('PROBLEMS'),
    }
  }
};
export default resolver
