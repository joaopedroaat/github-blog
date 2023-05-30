import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './contexts/PostContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <PostProvider>
          <Router />
        </PostProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
