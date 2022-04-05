import mockGames from '../../mockGame.json'

const resolver = {
  Query: {
    problems: () => mockGames.questions
  }
};
export default resolver
