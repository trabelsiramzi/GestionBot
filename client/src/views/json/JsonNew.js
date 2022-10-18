import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import JsonForm from './_forms'

const JsonNew = () => {
  let navigate = useNavigate()

  const submit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/json`, data)
      navigate('/dashboard/json')
    } catch (e) {
      console.log(e)
    }
  }
  return <JsonForm submit={submit} type={'new'} />
}

export default JsonNew
