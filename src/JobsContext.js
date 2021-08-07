// import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

export const JobsContext = createContext()

export const JobsContextProvider = (props) => {
    const [data, setData] = useState()

    useEffect(() =>{
        fetch("../jobs.json").then(result =>{
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