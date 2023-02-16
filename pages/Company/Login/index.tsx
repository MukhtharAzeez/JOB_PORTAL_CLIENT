import React from 'react'
import { Login } from '../../../components/Common'
import companyLogin from '../../../public/image/companyLogin.webp'


function index() {
    return (
        <Login type={'company'} image={companyLogin} color={"#082955"}/>
    )
}

export default index
