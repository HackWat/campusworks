import React from 'react'

function JobItem(props) {
    const data = props.data;

    return(
        <div className="card text-white" style={{backgroundColor: '#000'}}>
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">{data.university}</p>
                <p className="card-text">{data.desc}</p>
                {/* <a href={data.url} class="btn btn-warning" target="_blank">Apply now</a> */}
            </div>
        </div>
    )
}

export default JobItem