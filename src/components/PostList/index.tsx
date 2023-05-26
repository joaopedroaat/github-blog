import { Post } from '../../pages/Home'
import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </PostListContainer>
  )
}
