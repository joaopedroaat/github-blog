import { ChangeEvent, useContext, useState } from 'react'
import { Input, SearchInputContainer } from './styles'
import { PostContext } from '../../contexts/PostContext'

export function SearchInput() {
  const [query, setQuery] = useState('')

  const { posts, fetchPosts } = useContext(PostContext)

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    fetchPosts(evt.target.value)
    setQuery(evt.target.value)
  }

  return (
    <SearchInputContainer>
      <header>
        <h2>Publicações</h2>
        <small>{posts.length} publicações</small>
      </header>
      <Input
        type="text"
        placeholder="Buscar conteúdo"
        value={query}
        onChange={handleInputChange}
      />
    </SearchInputContainer>
  )
}
