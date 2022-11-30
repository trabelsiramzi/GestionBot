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
  CFormInput,
} from '@coreui/react'

const ReportingList = () => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/reporting?search=${search}`,
      { headers },
    )
    setList(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [search])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Historique des conversations</strong>
          </CCardHeader>
          <CCardBody>
            <CTable caption="top" bordered>
              <CTableCaption>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Recherche"
                  aria-label="recherche"
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
              </CTableCaption>
              <CTableHead>
                <CTableRow>
                  {/* <CTableHeaderCell scope="col">ID</CTableHeaderCell> */}
                  <CTableHeaderCell scope="row" color="dark">
                    Question
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="row" color="dark">
                    Reponse
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {list?.map((res, key) => (
                  <CTableRow key={key} scope="col">
                    {/* <CTableHeaderCell>{res._id}</CTableHeaderCell> */}
                    <CTableDataCell className="w-50">{res.Question}</CTableDataCell>
                    <CTableDataCell>{res.Reponse}</CTableDataCell>
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

export default ReportingList
