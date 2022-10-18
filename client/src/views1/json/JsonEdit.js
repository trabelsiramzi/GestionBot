import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import JsonForm from './_forms'

const JsonEdit = () => {
  let navigate = useNavigate()
  let { _id } = useParams()
  console.log(_id)
  const [data, setData] = useState({})
  const [fetch, setFetch] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/json/${_id}`)
      setData(response.data)
      setFetch(true)
    }
    fetchData()
  }, [])
  const submit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(`${process.env.REACT_APP_API}/api/json/${_id}`, data)
      navigate(`/dashboard/json/${_id}`)
    } catch (e) {
      console.log(e)
    }
  }
  return <> {fetch && <JsonForm submit={submit} type={'new'} data={data} />}</>
}

export default JsonEdit
