import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import Terminal from 'terminal-in-react'

const Training = () => {
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  const runTraining = (cmd, print) => {
    console.log(cmd)

    axios
      .get(`${process.env.REACT_APP_API}/api/training`, { headers })
      .then((response) => {
        print(`-${response}`)
      })
      .catch((e) => {
        print(`-eroor${e}}`)
      })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>lancer l&apos;entrainement</strong>
          </CCardHeader>
          <CCardBody>
            {/* <CButton color="success" size="lg" href="/json/new">
              Nouveau Tag
            </CButton> */}
            <div
              style={{
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
                msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Training
