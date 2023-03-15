import React from 'react'
import { Login } from '../../../components/Common'
import adminLogin from '../../../public/image/adminLogin.webp'


function index({req}:any) {
    return (
        <Login type={'admin'} image={adminLogin} color={"#082955"}/>
    )
}

export default index

export async function getServerSideProps({ req }: any) {
    const obj: null = null
    return {
        props: {
            obj
        }
    }
}