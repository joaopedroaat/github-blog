import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostListContainer = styled.ul`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`

export const PostLink = styled(NavLink)`
  color: ${(props) => props.theme['base-text']};
  text-decoration: none;
`
