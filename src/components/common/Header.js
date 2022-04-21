import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
`

const Logo = styled.div`
  font-size: 1.5rem;
`

const Header = () => {
  return (
    <Wrapper>
      <Logo>Header</Logo>
    </Wrapper>
  )
}

export default Header
