import axios from 'axios'

export interface UserResponse {
  id: string
  login: string
  name: string | null
  bio: string | null
  company: string | null
  followers: number
  avatarUrl: string
  url: string
}

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})
