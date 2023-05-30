import { useContext } from 'react'
import { PostCard } from '../PostCard'
import { PostLink, PostListContainer } from './styles'
import { PostContext } from '../../contexts/PostContext'

export function PostList() {
  const { posts } = useContext(PostContext)

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostLink key={post.id} to={`/posts/${post.id}`}>
          <PostCard
            title={post.title}
            content={post.body}
            createdAt={post.createdAt}
          />
        </PostLink>
      ))}
    </PostListContainer>
  )
}
