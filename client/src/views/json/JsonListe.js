import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
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
  CButton,
} from '@coreui/react'

const TablesJson = () => {
  const [list, setList] = useState([])
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  const deleteTag = async (_id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/api/json/${_id}`, { headers })
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }
  const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/json`, { headers })
    setList(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liste des tags</strong>
          </CCardHeader>
          <CCardBody>
            <CTable caption="top">
              <CTableCaption>
                <CButton color="info" size="lg" href="/json/new">
                  Nouveau Tag
                </CButton>
              </CTableCaption>
              <CTableHead>
                <CTableRow>
                  {/* <CTableHeaderCell scope="col">ID</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">TAGS</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ACTION</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {list?.map((tags, key) => (
                  <CTableRow key={key} scope="row">
                    {/* <CTableHeaderCell scope="row">{tags._id}</CTableHeaderCell> */}
                    <CTableDataCell>{tags.tag}</CTableDataCell>
                    <CTableDataCell>
                      <CDropdown variant="btn-group">
                        <CDropdownToggle color="secondary" size="lg">
                          Action
                        </CDropdownToggle>

                        <CDropdownMenu>
                          <CDropdownItem href={`/json/${tags._id}`}>Consulter</CDropdownItem>
                          <CDropdownItem href={`/json/${tags._id}/edit`}>Editer</CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem onClick={(e) => deleteTag(tags._id)}>
                            Supprimer
                          </CDropdownItem>
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
