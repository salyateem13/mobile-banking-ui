import React, {Component}  from 'react';
import EmploymentInfoForm from './EmploymentInfoForm';
import AddEmpInfoButton from './AddEmpInfoButton';

class SignUpForm extends Component {
    constructor(context,props){
        super(context, props);
        this.state = {
            firstName: '',
            lastName: '',
            streetAddress: '',
            city: '',
            state: '',
            email: '',
            username: '',
            password: '',
            isSignUpFormEmpty: true
           
        }
        this.change = this.change.bind(this);

    }

    triggerEmpForm= () => {
        this.setState({
            isAddEmploymentInfoState: true,
            isSignUpFormEmpty: false
        })
    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
       
    render(){
        return (
            <div className="">
                 <form>
                     { this.state.isSignUpFormEmpty && <div>
                        <label>First Name</label><input type='text' name='firstName' onChange={e => this.change(e)} value ={this.state.firstName}/>
                        <label>Last Name</label><input type='text' name='lastName' onChange={e => this.change(e)} value ={this.state.lastName}/>
                        <label>Street Address</label><input type='text' name='streetAddress' onChange={e => this.change(e)} value ={this.state.streetAddress}/>
                        <label>City</label><input type='text' name='city' onChange={e => this.change(e)} value ={this.state.city}/>
                        <label>State</label><input type='text' name='State' onChange={e => this.change(e)} value ={this.state.state}/>
                        <label>Email</label><input type='email' name='email' onChange={e => this.change(e)} value ={this.state.email}/>
                        <label>User Name</label><input type='text' name='userName' onChange={e => this.change(e)} value ={this.state.username}/>
                        <label> Password</label> <input type='password' name='password' onChange={e => this.change (e)} value ={this.state.password}/>
                        <AddEmpInfoButton  addEmpInfo= {this.triggerEmpForm}/>
                     </div>}
                    
                   {this.state.isAddEmploymentInfoState && <EmploymentInfoForm />}
                   
             </form>
            </div>
        )
    }
}

export default SignUpForm