import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import { DocsExample } from 'src/components'

const TablesJson = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/json`)
      setList(response.data)
    }
    fetchData()
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Captions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A <code>&lt;CTableCaption&gt;</code> functions like a heading for a table. It helps
              users with screen readers to find a table and understand what it&#39;s about and
              decide if they want to read it.
            </p>
            <p className="text-medium-emphasis small">
              You can also put the <code>&lt;CTableCaption&gt;</code> on the top of the table with{' '}
              <code>caption=&#34;top&#34;</code>.
            </p>

            <CTable caption="top">
              <CTableCaption>List of Tags</CTableCaption>
              <CTableCaption>Nouveau Tag</CTableCaption>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">TAGS</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ACTION</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {list.map((tags, key) => (
                  <CTableRow key={key} scope="row">
                    <CTableHeaderCell scope="row">{tags._id}</CTableHeaderCell>
                    <CTableDataCell>{tags.tag}</CTableDataCell>
                    <CTableDataCell>
                      <CDropdown variant="btn-group">
                        <CDropdownToggle color="secondary" size="lg">
                          Action
                        </CDropdownToggle>

                        <CDropdownMenu>
                          <CDropdownItem href={`#/dashboard/json/${tags._id}`}>
                            consulaté
                          </CDropdownItem>
                          <CDropdownItem href={`#/dashboard/json/${tags._id}/edite`}>
                            editer
                          </CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem href="#">supprimer</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TablesJson
