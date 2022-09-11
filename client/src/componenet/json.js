import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ListJson = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3501/api/json")
            setList(response.data)
        }
        fetchData()
    },[])
    return (<div>{list.length>0&&list.map((data,key) => {
        return (
            <h1 key={key}>{data.tag}</h1>
        )
    })}</div>)
}

export default ListJson 