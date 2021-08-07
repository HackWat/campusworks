import React, { useContext } from 'react'
import JobsContext from '../../JobsContext'
import JobItem from './JobItem'
import styled from 'styled-components'

function Jobs(props) {
    const { data } = useContext(JobsContext)

    return (
        <JobGrid>
            {data?
            data.map(job=>(
                (job.university == props.university)?
                <JobItem data={job} />:null
                ))
                :"Loading"
            }
        </JobGrid>
    )
}

export default Jobs

const JobGrid = styled.div `
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, minmax(0, 0.5fr));

    &:empty{
        grid-gap" 0px;
        width:0;
        height:0;
    }
`