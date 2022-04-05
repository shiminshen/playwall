import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client';

const GET_PROBLEM = gql`
  query problems {
    problems {
      questionType
      answerType
      questionId
      content
      answers
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
`;

const AnswerWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Problem = () => {
  const { loading, error, data } = useQuery(GET_PROBLEM)
  return <p>{JSON.stringify(data)}</p>
}

const Answer = () => {
  return (
    <AnswerWrapper>
      <input type='text' />
    </AnswerWrapper>
  )
};

const GameRoom = () => {
  return(
    <Wrapper>
      <Problem />
      <Answer />
    </Wrapper>
    )
}

export default GameRoom
