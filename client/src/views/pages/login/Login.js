import React, { useState, useEffect } from 'react'
// import logo from './sopra.png'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Cookies from 'js-cookie'
import { useNavigate, Navigate } from 'react-router-dom'
import logo from 'src/assets/Soprahrr.png'

import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    const verify = async () => {
      const token = Cookies.get('token')
      const headers = { Authorization: `Bearer ${token}` }
      const response = await axios.get(`${process.env.REACT_APP_API}/api/verifyToken`, { headers })
      if (response.status === 201) {
        setAuth(true)
      }
    }
    verify()
  }, [])
  const submit = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/login`, {
        email,
        password,
      })
      if (response.status === 200) {
        Cookies.set('token', response.data.token)
        navigate('/')
      } else {
        // eslint-disable-next-line no-throw-literal
        throw 'invalid response'
      }
    } catch (e) {
      console.log(e)
    }
  }
  if (auth) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Connexion</h1>
                    <p className="text-medium-emphasis">Connectez-vous à votre compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Nom utilisateur"
                        autoComplete="username"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={submit}>
                          Connexion
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Mot de passe oublié?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <img style={{ marginTop: '70px' }} src={logo} height={60} />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
