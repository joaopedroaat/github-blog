import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost, PostContext } from '../../contexts/PostContext'
import { PostHeader } from '../../components/PostHeader'
import { PostContainer, PostContent } from './styles'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import gfm from 'remark-gfm'

export function Post() {
  const { posts } = useContext(PostContext)
  const [post, setPost] = useState<IPost>({} as IPost)

  const { id } = useParams()

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === Number(id))
    if (selectedPost) setPost(selectedPost)
  }, [id, posts])

  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostContent>
        <ReactMarkdown remarkPlugins={[gfm]}>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
