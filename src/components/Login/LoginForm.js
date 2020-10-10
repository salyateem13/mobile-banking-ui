import React, {Component}  from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

class LoginForm extends Component {
    constructor(context,props){
        super(context, props);
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false
           
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);

    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
   submit (e){
    e.preventDefault();
    axios.post('/auth/login', {
        username: this.state.username,
        password: this.state.password
    })
    .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data));
            if(localStorage.getItem('token')){
                this.setState({
                    isAuthenticated : true
                });
            }
            this.props.history.push('/dashboard')
            
    });
   }
   validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
    render(){

        if(this.state.isAuthenticated === true){
        }
        return (
            <div className="LogInForm" >
            <form onSubmit={e => this.submit(e)}>

            <FormGroup controlId="username" >
                <FormLabel>Username</FormLabel>
                <FormControl placeholder="Enter username" type='text' name='username' onChange={e => this.change(e)} value ={this.state.username}/>
            </FormGroup>
            <FormGroup controlId="paswword" >
                <FormLabel>Password</FormLabel>
                <FormControl placeholder="Enter password" type='password' name='password' onChange={e => this.change(e)} value ={this.state.password}/>
            </FormGroup>
            <Button
                 block
                disabled={!this.validateForm()}
                type="submit">
            Login
          </Button>
             </form>
            </div>
        )
    }
}

export default withRouter(LoginForm)