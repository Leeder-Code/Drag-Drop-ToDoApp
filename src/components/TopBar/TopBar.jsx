import React from 'react'
import styled from 'styled-components'

const TopBarContainer = styled.div`
  height: 65px;
  width: 85%;
  background-color: white;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(0.7rem);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  display: flex;
  align-items: center;
`
const TopBar = () => {
  return <TopBarContainer>NavBar ^.^</TopBarContainer>
}

export default TopBar
