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
            <strong>Liste des question</strong>
          </CCardHeader>
          <CCardBody>
            <CTable caption="top">
              <CTableCaption>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="recherche"
                  aria-label="lg input example"
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
              </CTableCaption>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Reponse</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {list?.map((res, key) => (
                  <CTableRow key={key} scope="row">
                    <CTableHeaderCell>{res._id}</CTableHeaderCell>
                    <CTableDataCell>{res.Question}</CTableDataCell>
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
