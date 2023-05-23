import { DefaultLayoutContainer } from './styles'

import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'
import logo from '../../assets/Logo.svg'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <header>
        <img src={effect1} alt="" />
        <img src={logo} alt="" />
        <img src={effect2} alt="" />
      </header>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
