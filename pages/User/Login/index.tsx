import React from 'react'
import { Login } from '../../../components/Common'
import userLogin from '../../../public/image/userLogin.svg'


function index() {
  return (
    <Login type={'user'} image={userLogin} color={"#38d39f"}/>
  )
}

export default index
