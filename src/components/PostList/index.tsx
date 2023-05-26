import { Post } from '../../pages/Home'
import { PostCard } from '../PostCard'
import { PostLink, PostListContainer } from './styles'

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostLink key={post.title} to="/post">
          <PostCard
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        </PostLink>
      ))}
    </PostListContainer>
  )
}
