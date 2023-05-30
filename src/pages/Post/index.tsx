import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost, PostContext } from '../../contexts/PostContext'

export function Post() {
  const { posts } = useContext(PostContext)
  const [post, setPost] = useState<IPost>({} as IPost)

  const { id } = useParams()

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === Number(id))
    if (selectedPost) setPost(selectedPost)
  }, [id, posts])

  return <h1>{post.title}</h1>
}
