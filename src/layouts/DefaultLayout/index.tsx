import { LayoutContent, LayoutHeader } from './styles'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <LayoutHeader />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </div>
  )
}
