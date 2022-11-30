import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tags',
    to: '/json',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Historique',
    to: '/reporting',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Entrainement',
    to: '/training',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    badge: {
      color: 'danger',
    },
  },
]

export default _nav
