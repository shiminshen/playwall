import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const GET_GAMES = gql`
  query games {
    games {
      id
      title
      description
      questions {
        id
      }
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  margin: 80px;
  display: flex;
  flex-wrap: wrap;
`

const GameCard = styled(Card)`
  max-height: 300px;
  margin-top: 20px;
  margin-right: 20px;
`

const Game = ({ game = {} }) => {
  const { id } = game
  return (
    <GameCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          #tag1
        </Typography>
        <Typography variant="h5" component="div">
          {game?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">{game.description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/game/${id}`}>
          <Button size="small">Play</Button>
        </Link>
      </CardActions>
    </GameCard>
  )
}

const GameList = () => {
  const { data } = useQuery(GET_GAMES)
  const games = data?.games

  return (
    <Wrapper>
      {games?.map((I) => (
        <Game key={I.id} game={I} />
      ))}
    </Wrapper>
  )
}

export default GameList
