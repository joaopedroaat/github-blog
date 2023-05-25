import { Post } from '../../pages/Home'
import { PostCard } from '../PostCard'
import { Column, PostListContainer, Row } from './styles'

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <Row key={post.title}>
          <Column>
            <PostCard
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
            />
          </Column>
        </Row>
      ))}
    </PostListContainer>
  )
}
