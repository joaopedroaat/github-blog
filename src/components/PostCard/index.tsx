import { formatDateByDistance } from '../../utils/Formatter'
import { PostCardContainer } from './styles'

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
        <small>{formatDateByDistance(new Date(createdAt))}</small>
      </header>
      <p>{content}</p>
    </PostCardContainer>
  )
}
