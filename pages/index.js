import Head from 'next/head'

import withApollo from '../src/lib/withApollo'
import GameRoom from '../src/components/room/GameRoom'

const Home = () => {
  return (
    <GameRoom />
  )
}

export default withApollo(Home)
