import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
