import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import JsonForm from './_forms'
import Cookies from 'js-cookie'

const JsonEdit = () => {
  let navigate = useNavigate()
  let { _id } = useParams()
  const [data, setData] = useState({})
  const [fetch, setFetch] = useState(false)
  const token = Cookies.get('token')
  const headers = { Authorization: `Bearer ${token}` }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/json/${_id}`, { headers })
      setData(response.data)
      setFetch(true)
    }
    fetchData()
  }, [])
  const submit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(`${process.env.REACT_APP_API}/api/json/${_id}`, data, {
        headers,
      })
      navigate(`/json/${_id}`)
    } catch (e) {
      console.log(e)
    }
  }
  return <> {fetch && <JsonForm submit={submit} type={'edit'} data={data} />}</>
}

export default JsonEdit
