import { styled } from 'styled-components'

export const SearchInputContainer = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
    }

    margin-bottom: 0.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`
