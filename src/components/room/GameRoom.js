import React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Button from '@mui/material/Button'

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
  return <p>{question?.content}</p>
}

const Answer = ({ answer = {} }) => {
  return (
    <AnswerWrapper>
      <Options answer={answer} />
    </AnswerWrapper>
  )
}

const StyledButton = styled(Button)`
  width: 50%;
`

const Option = ({ option }) => {
  return <StyledButton type="button">{option}</StyledButton>
}

const OptionsWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`

const Options = ({ answer }) => {
  const { options } = answer
  return (
    <OptionsWrapper>
      {options?.map((I, idx) => (
        <Option key={idx} option={I} />
      ))}
    </OptionsWrapper>
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
