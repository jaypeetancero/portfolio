import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSidebar : true
        }
    }

    setToggle=(toggle)=>{
        this.setState({
            toggleSidebar: toggle
        })
        console.log(this.state.toggleSidebar)
    }

    render() {
        return (
          <div>
              <div className="position-absolute float-left">
              {this.state.toggleSidebar ? 
                <nav>
                    <button type="button" className="btn btn-success my-3" onClick={() => this.setToggle(false)}>Toggle Sidebar</button>
                  <ul>
                    <li className="my-3 h4">Basic Style of my Portfolio</li>
                    <li className="my-3 h4">Responsive Style of my Portfolio</li>
                  </ul>
                </nav>
                : 
                <button type="button" className="btn btn-info" onClick={() => this.setToggle(true)}>Toggle Sidebar</button>
                }
              </div>
          </div>
        );
    }
}

export default Sidebar
