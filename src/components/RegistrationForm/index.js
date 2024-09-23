import React, {useState} from 'react'
import './index.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleBlur = event => {
    const {name, value} = event.target
    if (value.trim() === '') {
      if (name === 'firstName') {
        setFirstNameError('Required')
      } else if (name === 'lastName') {
        setLastNameError('Required')
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    let isValid = true

    if (firstName.trim() === '') {
      setFirstNameError('Required')
      isValid = false
    }

    if (lastName.trim() === '') {
      setLastNameError('Required')
      isValid = false
    }

    if (isValid) {
      setIsSubmitted(true)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target
    if (name === 'firstName') {
      setFirstName(value)
      if (value.trim() !== '') {
        setFirstNameError('')
      }
    } else if (name === 'lastName') {
      setLastName(value)
      if (value.trim() !== '') {
        setLastNameError('')
      }
    }
  }

  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setFirstNameError('')
    setLastNameError('')
    setIsSubmitted(false)
  }

  return (
    <div className="registration-form-container">
      <h1 className="registration-heading">Registration</h1>
      {isSubmitted ? (
        <div className="success-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-icon"
          />
          <p>Submitted Successfully</p>
          <button
            type="button"
            onClick={handleReset}
            className="submit-another-response-button"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              className={`input ${firstNameError ? 'error' : ''}`}
            />
            {firstNameError && (
              <p className="error-message">{firstNameError}</p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              className={`input ${lastNameError ? 'error' : ''}`}
            />
            {lastNameError && <p className="error-message">{lastNameError}</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm
