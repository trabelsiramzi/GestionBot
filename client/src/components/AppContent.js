import React, { Suspense, useState, useEffect } from 'react'
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import Cookies from 'js-cookie'
import axios from 'axios'

// routes config
import routes from '../routes'

const AppContent = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const verify = async () => {
      const token = Cookies.get('token')
      const headers = { Authorization: `Bearer ${token}` }
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/verifyToken`, {
          headers,
        })
        console.log(response)
        if (response.status === 403) {
          navigate('/login')
        }
      } catch (e) {
        navigate('/login')
      }
    }
    verify()
  }, [])
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="/json" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
