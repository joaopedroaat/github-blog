import { useEffect, useState } from 'react'
import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { fetchIssues } from '../../apis/github'

export interface Post {
  id: number
  title: string
  body: string
  comments: number
  createdAt: string
  url: string
  owner: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const issues = await fetchIssues('github-blog', 'joaopedroaat')
      const mappedPosts: Post[] = issues.map((issue) => ({
        id: issue.id,
        title: issue.title,
        body: issue.body,
        comments: issue.comments,
        createdAt: issue.created_at,
        url: issue.url,
        owner: issue.user.login,
      }))

      setPosts(mappedPosts)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <Profile />
      <PostList posts={posts} />
    </div>
  )
}
