import React from 'react'
import './homepage.css'

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
                <button className="btn btn-primary btn-lg mx-2 my-2">Look for jobs</button>
                <button className="btn btn-outline-info btn-lg mx-2">Recruit people?</button>
            </div>
        </div>
    )
}

export default Banner
