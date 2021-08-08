// import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

export const JobsContext = createContext()

export const JobsContextProvider = (props) => {
    const [data, setData] = useState()

    useEffect(() =>{
        fetch("http://127.0.0.1:5000/job").then(result =>{
            result.json().then((resp)=>{setData(resp)})},[])
            console.warn(data);
        }, [])

    return (
        <JobsContext.Provider value={{ data }}>
            {props.children}
        </JobsContext.Provider>
    )
}

export default JobsContext