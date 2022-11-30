import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import Terminal from 'terminal-in-react'

const Training = () => {
  const [results, setResult] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  const runTraining = () => {
    axios
      .get(`${process.env.REACT_APP_API}/api/training`, { headers })
      .then((response) => {
        setResult(response.data)
        setIsLoading(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lancer l&apos;entrainement</strong>
          </CCardHeader>
          <CCardBody>
            <CButton color="info" size="lg" onClick={runTraining}>
              Lancer l&apos;entrainement
            </CButton>
            {isLoading && (
              <div
                style={{
                  marginTop: '10vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Terminal
                  color="white"
                  backgroundColor="black"
                  barColor="black"
                  style={{ fontWeight: 'bold', fontSize: '1em' }}
                  // commands={{
                  //   'run-training': runTraining(),
                  // }}
                  commandPassThrough={runTraining}
                  descriptions={{
                    'open-google': 'opens google.com',
                    showmsg: 'shows a message',
                    alert: 'alert',
                    popup: 'alert',
                  }}
                  msg={results}
                />
              </div>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Training
