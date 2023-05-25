import { formatDistance } from 'date-fns'
import { PostCardContainer } from './styles'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  title: string
  content: string
  createdAt: string
}

export function PostCard({ title, content, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h1>{title}</h1>
        <small>
          {formatDistance(new Date(createdAt), Date.now(), {
            locale: ptBR,
            addSuffix: true,
          })}
        </small>
      </header>
      <p>{content}</p>
    </PostCardContainer>
  )
}
