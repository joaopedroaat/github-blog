import { styled } from 'styled-components'

export const LayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 18.5rem;

  background: linear-gradient(
    180deg,
    rgba(11, 27, 43, 1) 35%,
    rgba(4, 25, 46, 1) 100%
  );
`

export const LayoutContent = styled.main`
  margin: auto;
  width: 50%;

  margin-top: -5.5rem;
`
