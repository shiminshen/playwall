import React from 'react'
import { useRouter } from 'next/router'

import withApollo from 'lib/withApollo'
import GameRoom from 'components/room/GameRoom'

const Home = () => {
  const {
    query: { gameId },
  } = useRouter()

  return <GameRoom gameId={gameId} />
}

export default withApollo(Home)
