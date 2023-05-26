import { styled } from 'styled-components'

export const PostListContainer = styled.ul`
  margin-top: 4.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`
