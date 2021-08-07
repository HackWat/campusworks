import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

export const JobsContext = createContext()

export const JobsContextProvider = (props) => {
    const [data, setData] = useState()

    useEffect(()=> {
        axios.get(
            '../jobs.json'
        )
        .then((response)=> setData(response.data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <JobsContext.Provider value={{data}}>
            {props.children}
        </JobsContext.Provider>
    )
}

export default JobsContext