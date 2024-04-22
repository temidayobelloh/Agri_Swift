import React from 'react'

const CheckDetails = () => {
  return (
    <div className='check-details-wrapper'>
    <p className='prompt-message-one'>Check your email</p>
    <p className='prompt-message-two'>A link has been sent to your email, click to confirm sign up</p>
    <span className='prompt-message-three'>
    <a href="#">I did not get an email.</a>
    <a href="#">Resend Email</a>
    </span>
    </div>
  )
}

export default CheckDetails;
