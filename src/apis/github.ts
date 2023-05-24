import axios from 'axios'

export interface UserResponse {
  id: string
  login: string
  name: string | null
  bio: string | null
  company: string | null
  followers: number
  avatar_url: string
  profileUrl: string
}

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})
