import React from 'react'
import JsonForm from './_forms'

const JsonNew = () => {
  const data = { _id: '12315645687897' }
  return <JsonForm data={data} type={'new'} />
}

export default JsonNew
