import { ReactNode, createContext, useEffect, useState } from 'react'
import { fetchIssues } from '../apis/github'

export interface IPost {
  id: number
  title: string
  body: string
  comments: number
  createdAt: string
  url: string
  owner: string
}

interface PostContextType {
  posts: IPost[]
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = async () => {
    const issues = await fetchIssues('github-blog', 'joaopedroaat')
    const mappedPosts: IPost[] = issues.map((issue) => ({
      id: issue.number,
      title: issue.title,
      body: issue.body,
      comments: issue.comments,
      createdAt: issue.created_at,
      url: issue.url,
      owner: issue.user.login,
    }))
    setPosts(mappedPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  )
}
