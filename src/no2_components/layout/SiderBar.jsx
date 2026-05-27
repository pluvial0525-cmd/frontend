import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiderBar = ({ open }) => {
  return (
    <Sidebar open={open}>

      <StyledLink to="/">
        Home
      </StyledLink>

      <StyledLink to="/todo">
        할일
      </StyledLink>

      <StyledLink to="/employee">
        고용인 정보
      </StyledLink>

    </Sidebar>
  )
}

export default SiderBar

/* styled-components */

const Sidebar = styled.aside`
  position: fixed;

  top: 70px;

  left: ${({ open }) => (open ? '0' : '-220px')};

  width: 220px;
  height: calc(100vh - 70px);

  background-color: #13233f;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  transition: 0.3s;


  z-index: 999;
`

const StyledLink = styled(Link)`
  text-decoration: none;

  color: white;

  padding: 12px;

  border-radius: 8px;

  &:hover {
    background-color: #243552;
  }
` 