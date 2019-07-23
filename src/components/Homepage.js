import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="transition1" className="container bg-dark">
          <p className="display-1 m-4 p-4 text-center text-uppercase text-white">
          <ReactTypingEffect text="welcome to my homepage."/>
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="card col-4 m-4">
              <div className="card-header">
                <img className="rounded mx-auto d-block"
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  width="100px"
                />
              </div>
              <div className="card-body">
                <h5>What Library did I use?</h5>
                <p className="card-text">React.js</p>
                <a href="https://reactjs.org" className="btn btn-primary">Click here to learn about react.js</a>
              </div>
            </div>
            <div className="card col-4 m-4">
              <div className="card-header">
                <h3>Waiting for project to be insert</h3>
              </div>
              <div className="card-body">
                <h5>Status: Waiting for the owner to finish the project</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
