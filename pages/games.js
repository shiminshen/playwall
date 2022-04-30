import React from 'react'
import withApollo from '../src/lib/withApollo'
import GameList from '../src/components/games/GameList'

const Home = () => {
  return <GameList />
}

export default withApollo(Home)
