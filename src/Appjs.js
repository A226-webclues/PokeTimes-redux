import React, { Component } from "react";

class Appjs extends Component {
    state = {
        name : null,
        email: null,
        password: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
     
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="name">Email Id : </label>
                    <input type="text" id="email" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="name">Password : </label>
                    <input type="password" id="password" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Appjs;