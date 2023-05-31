import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'

export function Home() {
  return (
    <div>
      <Profile />
      <SearchInput />
      <PostList />
    </div>
  )
}
