import { useState } from 'react'
import { Profile } from '../../components/Profile'
import { PostCard } from '../../components/PostCard'
import { HomeContainer } from './styles'

interface Post {
  title: string
  content: string
  createdAt: string
}

export function Home() {
  const [posts] = useState<Post[]>([
    {
      title: 'JavaScript data types and data structures',
      content: `Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in JavaScript and what properties
      they have. These can be used to build other data structures. Wherever
      possible, comparisons with other languages are drawn. Dynamic typing
      JavaScript is a loosely typed and dynamic language. Variables in
      JavaScript are not directly associated with any particular value type,
      and any variable can be assigned (and re-assigned) values of all types:
      let foo = 42; // foo is now a number foo = bar; // foo is now a string
      foo = true; // foo is now a boolean`,
      createdAt: new Date().toISOString(),
    },
    {
      title: 'JavaScript data types and data structures',
      content: `Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in JavaScript and what properties
      they have. These can be used to build other data structures. Wherever
      possible, comparisons with other languages are drawn. Dynamic typing
      JavaScript is a loosely typed and dynamic language. Variables in
      JavaScript are not directly associated with any particular value type,
      and any variable can be assigned (and re-assigned) values of all types:
      let foo = 42; // foo is now a number foo = bar; // foo is now a string
      foo = true; // foo is now a boolean`,
      createdAt: new Date().toISOString(),
    },
  ])

  return (
    <HomeContainer>
      <Profile />
      <ul>
        {posts.map((post) => (
          <PostCard
            key={post.title}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        ))}
      </ul>
    </HomeContainer>
  )
}
