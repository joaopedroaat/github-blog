import axios from 'axios'

interface UserResponse {
  id: string
  login: string
  name: string | null
  bio: string | null
  company: string | null
  followers: number
  avatar_url: string
  profileUrl: string
}

interface Issue {
  number: number
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
  user: UserResponse
}

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})

export const fetchUser = async (login: string): Promise<UserResponse> => {
  return (await githubApi.get(`/users/${login}`)).data
}

export const fetchIssues = async (
  repo: string,
  owner: string,
): Promise<Issue[]> => {
  return (await githubApi.get(`/repos/${owner}/${repo}/issues`)).data
}
