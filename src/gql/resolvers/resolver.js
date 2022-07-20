import { PubSub } from 'graphql-subscriptions'

// import mockGames from '../../mockGames.json'
import mockQuestions from '../../mockQuestions.json'

const mockGames = {
  games: [
    {
      id: 1,
      title: 'game1',
      description: 'game1 description',
      questions: [
        {
          id: 1,
          type: 'text',
          content: '我會履行我的職責',
          answer: 'MOCK',
          options: [
            {
              type: 'text',
              content: '鬼滅之刃',
            },
            {
              type: 'text',
              content: '進擊的巨人',
            },
            {
              type: 'text',
              content: '我的英雄學園',
            },
            {
              type: 'text',
              content: '航海王',
            },
          ],
        },
        {
          id: 1,
          type: 'text',
          content: '那天人們想起曾經被支配的恐懼',
          answer: 'MOCK',
          options: [
            {
              type: 'text',
              content: '進擊的巨人',
            },
            {
              type: 'text',
              content: '我的英雄學園',
            },
            {
              type: 'text',
              content: '鬼滅之刃',
            },
            {
              type: 'text',
              content: '航海王',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'game2',
      description: 'game2 description',
      questions: [],
    },
    {
      id: 3,
      title: 'game3',
      description: 'game3 description',
      questions: [],
    },
  ],
}

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
