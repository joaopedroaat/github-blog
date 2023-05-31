import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  align-items: center;

  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};

  border-radius: 10px;

  box-shadow: 0px 2px 28px #00000002;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  img {
    width: 8.875rem;
    height: 8.875rem;
    border-radius: 8px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: bold;
      gap: 0.5rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  main {
    flex: 1;
  }

  footer {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;

  color: ${(props) => props.theme['base-label']};
  p {
    color: ${(props) => props.theme['base-text']};
  }
`
