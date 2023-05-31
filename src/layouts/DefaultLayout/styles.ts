import { styled } from 'styled-components'

export const LayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 22.5rem;

  background: url('src/assets/Cover.svg') no-repeat;
  background-size: cover;
`

export const LayoutContent = styled.main`
  margin: auto;
  width: 50%;

  margin-top: -5.5rem;
  margin-bottom: 1rem;
`
