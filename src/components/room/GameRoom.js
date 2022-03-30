import React, {useState} from "react"
import styled from 'styled-components'

import mockProblem from './mockGame.json'

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
  return <p>{JSON.stringify(mockProblem)}</p>
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
