import React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

const GET_PROBLEM = gql`
  query questions {
    questions {
      id
      type
      content
      answer {
        type
        options
      }
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AnswerWrapper = styled.div`
  position: absolute;
  bottom: 0;
`

const Question = ({ question }) => {
  return <p>{JSON.stringify(question)}</p>
}

const Answer = ({ answer = {} }) => {
  return (
    <AnswerWrapper>
      <input type="text" />
      <Options answer={answer} />
    </AnswerWrapper>
  )
}

const Options = ({ answer }) => {
  const { options } = answer
  return (
    <div>
      {options?.map((I, idx) => (
        <div key={idx}>{I}</div>
      ))}
    </div>
  )
}

const GameRoom = () => {
  const { data } = useQuery(GET_PROBLEM)
  const question = data?.questions?.[0]
  const answer = question?.answer
  return (
    <Wrapper>
      <Question question={question} />
      <Answer answer={answer} />
    </Wrapper>
  )
}

export default GameRoom
