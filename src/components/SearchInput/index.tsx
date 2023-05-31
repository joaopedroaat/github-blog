import { Input, SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h2>Publicações</h2>
        <small>6 publicações</small>
      </header>
      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
