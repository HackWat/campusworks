import React, { Component } from "react";
import "./css/style.css";

export class FormNewJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      university: '',
      desc: ''
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    console.log(this.state)
    alert('A form was submitted: ' + this.state);
    fetch('http://127.0.0.1:5000/job', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/x-www-form-urlencoded'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        // return response.json();
      });

      e.preventDefault();

    // this.setState({ 
    //     name: '',
    //     university: '',
    //     desc: ''
    //  });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inner">
          <form
            // onSubmit={()=> this.onSubmit}
          >
            <h3>New Job</h3>
            <p>
              Dolore ex quis aliquip commodo quis eu elit incididunt nisi minim
              anim eiusmod ullamco. Sit aliquip pariatur culpa commodo. Irure
              laborum anim nisi amet ullamco minim.
            </p>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Job"
                name="name"
                value={this.state.value}
                onChange={(e)=> this.onChange(e)}
                required
              ></input>
              {/* <span>Name of Job</span> */}
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="University"
                name="university"
                value={this.state.value}
                onChange={(e)=> this.onChange(e)}
                required
              ></input>
              {/* <span>Name of University</span> */}
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="desc"
                value={this.state.value}
                onChange={(e)=>this.onChange(e)}
                required
              ></input>
              {/* <span>Job Description</span> */}
              <span className="border"></span>
            </label>
            <input className="button" type="submit" value="Submit" onClick={(e)=>this.onSubmit(e)}>
              {/* <i className="zmdi zmdi-arrow-right"></i> */}
            </input>
          </form>
        </div>
      </div>
    );
  }
}


// module.exports = FormNewJob
