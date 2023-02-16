import React from 'react'
import Login from '../../../components/Common/Login/Login'
import companyAdminLogin from '../../../public/image/companyAdminLogin.webp'


function index() {
    return (
        <Login type={'companyAdmin'} image={companyAdminLogin} color={"#dc8a64"} />
    )
}

export default index
