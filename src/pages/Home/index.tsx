import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'

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
  return (
    <div>
      <Profile />
      <PostList />
    </div>
  )
}
