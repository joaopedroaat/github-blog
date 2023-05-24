import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { UserResponse, githubApi } from '../../apis/github'
import { FooterIcons, ProfileContainer } from './styles'

interface User {
  id: string
  login: string
  name: string | null
  bio: string | null
  company: string | null
  followers: number
  avatarUrl: string
  profileUrl: string
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
    profileUrl: '',
  })

  useEffect(() => {
    async function fetchUserData() {
      const response: AxiosResponse<UserResponse> = await githubApi.get(
        `/users/joaopedroaat`,
      )

      const { id, login, name, bio, company, followers, avatar_url } =
        response.data

      setUser({
        id,
        login,
        name,
        bio,
        company,
        followers,
        avatarUrl: avatar_url,
        profileUrl: `https://github.com/${user.login}`,
      })
    }

    fetchUserData()
  }, [user.login])

  return (
    <ProfileContainer>
      <img src={user.avatarUrl} alt="" />
      <section>
        <header>
          <h1>{user.name}</h1>
          <a href={user.profileUrl} target="_blank" rel="noreferrer">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </header>
        <main>
          {user.bio
            ? user.bio
            : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, enim. Soluta, recusandae nam! Molestiae repellat debitis obcaecati fugit sunt placeat magni nostrum totam sed eaque, enim deleniti assumenda natus odio.'}
        </main>
        <footer>
          {user.login && (
            <FooterIcons>
              <FontAwesomeIcon icon={faGithub} />
              <p>{user.login}</p>
            </FooterIcons>
          )}

          {user.company && (
            <FooterIcons>
              <FontAwesomeIcon icon={faBuilding} />
              <p>{user.company}</p>
            </FooterIcons>
          )}
          {user.followers && (
            <FooterIcons>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>{user.followers}</p>
            </FooterIcons>
          )}
        </footer>
      </section>
    </ProfileContainer>
  )
}
