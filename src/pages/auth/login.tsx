import React from 'react'
import { loginEndpoint } from '../../spotify'
import '../auth/login.css'
export const Login = () => {
  return (
    <div className='login-page'>
        <img  src='' alt='spotify-logo' className='logo' />
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
        </a>
    </div>
  )
}
