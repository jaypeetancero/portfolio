import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import {Link} from 'react-router-dom';

export class SidebarComponents extends Component {
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
    }

    render() {
        return (
            <div>
          <Sidebar
            sidebar={
            <div>
            <i className="fas fa-toggle-on fa-2x" onClick={()=> this.setToggle(false)}/>
            <Link to={'./homePage'}>
            <ul className="m-3 text-left text-white hoverEffect1"><span>Homepage</span></ul></Link>
            <Link to={'./basicPortfolio'}>
            <ul className="m-3 text-left text-white hoverEffect1"><span>Basic Portfolio</span></ul></Link>
            <ul className="m-3 text-left text-white hoverEffect1"><span>Portfolio with a style</span></ul>
            </div>
        }
            open={this.state.toggleSidebar}
            styles={{ sidebar: { background: "grey" } }}
          >
              {!this.state.toggleSidebar ?
            <i className="fas fa-toggle-off fa-2x float-left" onClick={()=> this.setToggle(true)}/>
            : null
        }
          </Sidebar>
          
          </div>
        );
    }
}

export default SidebarComponents
