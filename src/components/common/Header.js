import React from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import AddIcon from '@mui/icons-material/Add'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 99;
`

const Logo = styled.div`
  font-size: 1.5rem;
`

const MenuWrapper = styled.div``

const Header = () => {
  return (
    <Wrapper>
      <Logo>Header</Logo>
      <MenuWrapper>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Create
        </Button>
        <Button variant="contained" startIcon={<LoginIcon />}>
          Login
        </Button>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Header
