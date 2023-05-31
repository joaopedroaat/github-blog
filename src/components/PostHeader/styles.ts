import { styled } from 'styled-components'

export const PostHeaderContainer = styled.nav`
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};

  border-radius: 10px;

  box-shadow: 0px 2px 28px #00000002;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    margin-bottom: 1.25rem;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    color: ${(props) => props.theme['base-span']};

    margin-top: 0.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
