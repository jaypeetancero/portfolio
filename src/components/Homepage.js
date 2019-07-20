import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: undefined
        }
        this.computeAge = this.computeAge.bind(this);
    }

    componentDidMount(){
        this.computeAge("02/13/1997");
    }

    computeAge(DOB){
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        this.setState({
            age: age
        })
    }

    render() {
        return (
            <div className="container">
                <img className="rounded-circle" src="https://wiki.d-addicts.com/images/8/80/Jerry_yan_profile.jpg"></img>
                <h1>Jaypee S. Tan</h1>
                <hr></hr>
                <div className="row">
                    <span className="col-3 h4">Address:</span>
                    <span className="col-3 text-left">Blk 1 Fb Lot 2 Mahogany St. Cristina Homes Camarin Caloocan City</span>

                    <span className="col-3 h4">Date of Birth:</span>
                    <span className="col-3 text-left">February 13, 1997, Age: {this.state.age} years old</span>
                </div>
                <br />
                <div className="row">
                    <span className="col-3 h4">Contact: </span>
                    <span className="col-3 text-left"><strong>Mobile#:</strong> +639971699023 <br />
                    <strong>Tel #:</strong> +029830799 <br />
                    <strong>E-mail:</strong> jaypeetan.bsit@gmail.com</span>
                </div>
                <hr></hr>
                <div className="row">
                    <span className="col-3 h4">Educational Background:</span>
                    <span className="col-7 text-left"><strong>Tertianary: </strong>AMA Computer College Fairview Campus (2014-2017)<img width="200px" src="http://www.ama.edu.ph/wp-content/uploads/2017/05/amau_logo_basic2a.png" /></span>
                    <span className="col-2 text-left">Bachelor of Science in Information Technology</span>
                </div>
                <div className="row">
                    <span className="col-3"></span>
                    <span className="col-9 text-left"><strong>Secondary: </strong>Cielito Zamora High-School Annex II (2011-2014)</span>
                </div>
                <br></br>
                <div className="row">
                    <span className="col-3"></span>
                    <span className="col-9 text-left"><strong>Primary: </strong>Cielito Zamora Memorial Elementary School (2006-2011)</span>
                </div>
                <hr />
            </div>
        )
    }
}

export default Homepage
