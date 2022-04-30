import React, { useState } from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Button from '@mui/material/Button'

const GET_PROBLEM = gql`
  query questions {
    questions {
      id
      type
      content
      options {
        type
        content
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

const Question = ({ question }) => {
  return <p>{question?.content}</p>
}

const StyledButton = styled(Button)`
  width: 50%;
`

const Option = ({ option, onClick }) => {
  const { content } = option || {}
  return (
    <StyledButton type="button" onClick={onClick}>
      {content}
    </StyledButton>
  )
}

const OptionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`

const Options = ({ options, onClick }) => {
  return (
    <OptionsWrapper>
      {options?.map((I, idx) => (
        <Option key={idx} option={I} onClick={onClick} />
      ))}
    </OptionsWrapper>
  )
}

const useGameNavigator = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  if (questionIndex > questions?.length) {
    return {
      question: null,
    }
  }

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
  }

  return {
    nextQuestion,
    question: questions?.[questionIndex],
  }
}

const GameRoom = () => {
  const { data } = useQuery(GET_PROBLEM)
  // const question = data?.questions?.[0]
  const { question, nextQuestion } = useGameNavigator({
    questions: data?.questions,
  })
  const options = question?.options

  return (
    <Wrapper>
      <Question question={question} />
      <Options options={options} onClick={nextQuestion} />
    </Wrapper>
  )
}

export default GameRoom
