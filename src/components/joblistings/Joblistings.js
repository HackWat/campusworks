import React, { useState } from 'react'
import Jobs from './Jobs'
import { JobsContextProvider } from '../../JobsContext'

function Joblistings() {
    const [university, setUniversity] = useState("")
    const [print, setPrint] = useState(false)

    function getUniversity(val) {
        setUniversity(val.target.value)
        setPrint(false)
    }
    return (
        <div className="container" style={{minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column"}}>
            <div className="container">
                <div className="form-group">
                    <label for="univ">Enter University</label>
                    <input type="text" className="form-control" id="univ" onChange={getUniversity} />
                </div>
                <br></br>
                <button className="btn btn-success" onClick={()=>setPrint(true)}>Submit</button>
            </div>
            {
                print?<JobsContextProvider>
                    <Jobs university={university} />
                </JobsContextProvider>:null
            }
        </div>
    )
}

export default Joblistings
