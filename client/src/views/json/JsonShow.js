import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

const JsonShow = () => {
  const [list, setList] = useState({})
  let { _id } = useParams()
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/json/${_id}`, { headers })
      setList(response.data)
    }
    fetchData()
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Consultation Tag</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CTable responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell style={{ 'text-align': 'center' }} colSpan="2" scope="col">
                      {list.tag}
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Patterns</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Responses</CTableHeaderCell>
                  </CTableRow>
                  {list?.patterns?.map((pattern, key) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <CTableRow>
                        <CTableDataCell class="align-middle">{pattern}</CTableDataCell>
                        <CTableDataCell>{list.responses[key]}</CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default JsonShow
