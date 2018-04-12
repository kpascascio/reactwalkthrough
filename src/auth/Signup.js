import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        //POST - fetch 
        fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then( data => {
            console.log(data)
            this.props.setToken(data.sessionToken)
        } )
        //save our token - data.sessionToken
        //prevent default

        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Signup</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup