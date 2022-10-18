import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
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
  let navigate = useNavigate()

  const [list, setList] = useState([])
  const deleteTag = async (_id) => {
    try {
      axios.delete(`${process.env.REACT_APP_API}/api/json/${_id}`)
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }
  const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/json`)
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
            <strong>Liste des tag</strong>
          </CCardHeader>
          <CCardBody>
            <CTable caption="top">
              <CTableCaption>
                <CButton color="success" size="lg" href="#/dashboard/json/new">
                  Nouveau Tag
                </CButton>
              </CTableCaption>
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
                          <CDropdownItem href={`#/dashboard/json/${tags._id}/edit`}>
                            editer
                          </CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem onClick={(e) => deleteTag(tags._id)}>
                            supprimer
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
