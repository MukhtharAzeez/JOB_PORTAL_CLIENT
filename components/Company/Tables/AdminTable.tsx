import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { AuthorizationContext } from '../../../contexts/AuthorizationContext';




function AdminTable() {
    const { alertToLogin } = useContext(AuthorizationContext);
    const [countries, setCountries] = useState([])
    const getCountries = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setCountries(response.data)
        } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
                alertToLogin()
                return
            }
        }
    }

    type DataRow = {
        title: string;
        director: string;
        year: string;
    };

    const columns: TableColumn<DataRow>[] = [
        {
            name: "Admin Name",
            selector: (row: any) => row.id
        },
        {
            name: "Position",
            selector: (row: any) => row.title
        },
        {
            name: "Total Hiring",
            selector: (row: any) => row.userId
        },
        {
            name: "Total Rejections",
            selector: (row: any) => row.title
        }

    ]


    useEffect(() => {
        getCountries();
    }, [])

    return (
        <DataTable
            title="Admins"
            columns={columns}
            data={countries}
            pagination
            fixedHeader
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            responsive
        />
    )
}

export default AdminTable
