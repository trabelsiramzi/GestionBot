import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CButton, CCol, CForm, CFormInput, CFormFeedback, CFormLabel } from '@coreui/react'
const JsonForm = ({ data, type }) => {
  const [validated, setValidated] = useState(false)
  const [patterns, setPatterns] = useState(data.patterns || [''])
  const [responses, setResponses] = useState(data.responses || [''])

  // handle input change
  const handleInputChange = (e, index, type) => {
    if (type === 'patterns') {
      const { value } = e.target
      const list = [...patterns]
      list[index] = value
      setPatterns(list)
    } else {
      const { value } = e.target
      const list = [...responses]
      list[index] = value
      setResponses(list)
    }
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index, type) => {
    if (type === 'patterns') {
      let list = [...patterns]
      list.splice(index, 1)
      setPatterns(list)
    } else {
      let list = [...responses]
      list.splice(index, 1)
      setResponses(list)
    }
  }

  // handle click event of the Add button
  const handleAddClick = (type) => {
    if (type === 'patterns') {
      setPatterns([...patterns, ''])
    } else {
      setResponses([...responses, ''])
    }
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      {type === 'edit' && (
        <>
          <CFormLabel htmlFor="validationCustom01">ID</CFormLabel>
          <CFormInput type="text" id="_id" defaultValue={data?._id} disabled />
        </>
      )}
      <CCol md={8}>
        <CFormLabel htmlFor="tag">Tag</CFormLabel>
        <CFormInput type="text" id="tag" defaultValue="" required />
        <CFormFeedback valid>looks good</CFormFeedback>
      </CCol>
      {patterns.map((pattern, key) => {
        return (
          <>
            <CCol key={key} md={8}>
              <CFormLabel htmlFor={`patterns ${key}`}>patterns #{key}</CFormLabel>
              <CFormInput
                type="text"
                id={`patterns ${key}`}
                value={pattern}
                onChange={(e) => handleInputChange(e, key, 'patterns')}
                required
              />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              {patterns.length !== 1 && (
                <CButton
                  color="danger"
                  size="sm"
                  onClick={() => handleRemoveClick(key, 'patterns')}
                >
                  Remove
                </CButton>
              )}
              {patterns.length - 1 === key && (
                <CButton color="success" size="sm" onClick={() => handleAddClick('patterns')}>
                  Ajouter pattern
                </CButton>
              )}
            </CCol>
          </>
        )
      })}
      {responses.map((response, key) => {
        return (
          <>
            <CCol key={key} md={8}>
              <CFormLabel htmlFor={`responses ${key}`}>responses #{key}</CFormLabel>
              <CFormInput
                type="text"
                id={`responses ${key}`}
                value={response}
                onChange={(e) => handleInputChange(e, key, 'responses')}
                required
              />
              <CFormFeedback valid>Looks good!</CFormFeedback>
              {responses.length !== 1 && (
                <CButton
                  color="danger"
                  size="sm"
                  onClick={() => handleRemoveClick(key, 'response')}
                >
                  Remove
                </CButton>
              )}
              {responses.length - 1 === key && (
                <CButton color="success" size="sm" onClick={() => handleAddClick('response')}>
                  Ajouter response
                </CButton>
              )}
            </CCol>
          </>
        )
      })}
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
export default JsonForm

JsonForm.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  submit: PropTypes.func,
}
