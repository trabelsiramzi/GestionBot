import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilAccountLogout, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/2.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Compte</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
          <CBadge color="danger" className="ms-2">
            In progress
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Paramétre</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
          <CBadge color="danger" className="ms-2">
            In progress
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/login">
          <CIcon icon={cilAccountLogout} className="me-2" />
          Déconnecter
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
