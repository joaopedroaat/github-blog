import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;

  height: 16.25rem;

  flex: 1;

  background: ${(props) => props.theme['base-post']};

  border-radius: 10px;

  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;

    gap: 1rem;

    h1 {
      font-size: 1.25rem;
    }

    small {
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
