import { useEffect, useState } from 'react'
import { githubApi, UserResponse } from '../../apis/github'
import { AxiosResponse } from 'axios'

interface User {
  id: string
  login: string
  name: string | null
  bio: string | null
  company: string | null
  followers: number
  avatarUrl: string
  url: string
}

export function Profile() {
  const [user, setUser] = useState<User>({
    id: '',
    login: '',
    name: null,
    bio: null,
    company: null,
    followers: 0,
    avatarUrl: '',
    url: '',
  })

  useEffect(() => {
    async function fetchUserData() {
      const response: AxiosResponse<UserResponse> = await githubApi.get(
        `/users/joaopedroaat`,
      )
      const { id, login, name, bio, company, followers, avatarUrl, url } =
        response.data
      setUser({
        id,
        login,
        name,
        bio,
        company,
        followers,
        avatarUrl,
        url,
      })
    }

    fetchUserData()
  }, [])

  return <div>{JSON.stringify(user)}</div>
}
