import { useContext } from 'react'
import { PostCard } from '../PostCard'
import { PostLink, PostListContainer } from './styles'
import { PostContext } from '../../contexts/PostContext'

export function PostList() {
  const { posts } = useContext(PostContext)

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostLink key={post.title} to="/post">
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
