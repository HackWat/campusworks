import React from 'react'
import './css/style.css'
// import './css/style.css.map'
// import './css/style.scss'

function Form() {
    return (
        <div className="wrapper">
             <div className="inner">
                <form action>
                    <h3>New Job</h3>
                    <p>
                        Dolore ex quis aliquip commodo quis eu elit incididunt nisi minim anim eiusmod ullamco. Sit aliquip pariatur culpa commodo. Irure laborum anim nisi amet ullamco minim. 
                    </p>
                    <label className="form-group">
                        <input type="text" className="form-control" placeholder="Job" required></input>
                        {/* <span>Name of Job</span> */}
                        <span className="border"></span>
                    </label>
                    <label className="form-group">
                        <input type="text" className="form-control" placeholder="University" required></input>
                        {/* <span>Name of University</span> */}
                        <span className="border"></span>
                    </label>
                    <label className="form-group">
                        <input type="text" className="form-control" placeholder="Description" required></input>
                        {/* <span>Job Description</span> */}
                        <span className="border"></span>
                    </label>
                    <button className="button">
                        Submit
                        <i className="zmdi zmdi-arrow-right"></i>
                    </button>
                </form>
             </div>
        </div>
    )
}

export default Form
