import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const JsonShow = () => {
  const [list, setList] = useState({})
  let { _id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/json/${_id}`)
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
              <CCol sm={12}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>{list.tag}</CCardTitle>
                    <CCardText>
                      <p>Patterns</p>
                      {list?.patterns?.map((pattern) => {
                        return (
                          <>
                            {pattern}
                            <br />
                          </>
                        )
                      })}
                    </CCardText>
                    <CCardText>
                      <p>Responses</p>
                      {list?.responses?.map((response) => {
                        return (
                          <>
                            {response} <br />
                          </>
                        )
                      })}
                    </CCardText>
                    {/* <CButton href="#">Go somewhere</CButton> */}
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default JsonShow
