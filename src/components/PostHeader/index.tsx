import { NavLink } from 'react-router-dom'
import { PostHeaderContainer } from './styles'
import { IPost } from '../../contexts/PostContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

interface PostHeaderProps {
  post: IPost
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>
        <a href={post.url} target="_blank" rel="noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h1>{post.title}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {post.owner}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {post.createdAt}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {post.comments}
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
