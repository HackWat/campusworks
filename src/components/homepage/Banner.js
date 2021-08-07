import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="container-fluid py-5 text-light">
            <div className="col-6-xxl col-9-lg col-12-sm banner mx-auto">
                <h1 className="display-4 mb-5">
                    Do you want to find part time jobs? Or are you a recruiter?
                </h1>
                <p className="desc">
                    Occaecat amet enim eu esse qui. Dolor culpa sit do anim sit enim incididunt commodo est. Ad aliquip laborum voluptate esse esse duis duis nulla labore enim enim nostrud labore. Tempor laboris sint id officia et deserunt cupidatat in quis sint ut nisi officia mollit.
                </p>
                <button className="btn btn-info btn-lg mx-2 my-2">
                    <Link to ="/jobs">Look for Jobs</Link>
                </button>
                <button className="btn btn-outline-info btn-lg mx-2">
                    <Link to ="/form">Recruit people?</Link>
                </button>
            </div>
        </div>
    )
}

export default Banner
