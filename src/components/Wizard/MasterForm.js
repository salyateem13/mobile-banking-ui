import React from 'react';
import {Form } from 'react-bootstrap';
import Step1 from './FormSteps/Step1';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step4 from './FormSteps/Step4';
import axios from 'axios';
class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    this.fileInput = React.createRef();
      // Set the initial input values
      this.state = {
        currentStep: 1, // Default is Step 1
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        _state: '',
        zip: '',
        email: '',
        username: '',
        password: '',
        occupation: '',
        incomeSource: '',
        bFirstName: '',
        bLastName: '',
        bStreetAddress: '',
        bCity: '',
        bState: '',
        bZip: '',
        bEmail: '',
        identification: undefined,
        proofOfAddress: undefined

      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
    
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault();
     // const user = localStorage.getItem('token')
      const { firstName, lastName, streetAddress, city, _state, email, username, password, occupation, incomeSource,
          bFirstName,bLastName,bStreetAddress,bCity,bState,bEmail,identification,proofOfAddress} = this.state
     
    axios.post('/auth/registration', {
        username: username,
	    password: 	password,
	    email:	email
    }).then((res) => {
        console.log(res.statusText)
        if(res.statusText === 'OK'){
            axios.post('/auth/login', {
                 username: username,
                 password: password
             }).then((res) => {
                 const token = JSON.stringify(res.data)
                 localStorage.setItem('token',token );
                     if(localStorage.getItem('token')){
                         this.setState({
                             isAuthenticated : true
                         });
                     } 
                if(res.statusText === 'OK'){

                    
                    axios.post('/customer/registration',  {
                        userid: JSON.stringify(res.data.user.id),
                        firstName: firstName,
                        lastName: lastName,
                        streetAddress:streetAddress,
                        city: city,
                        state: _state,
                        email: email,
                        occupation: occupation,
                        incomeSource: incomeSource,
                        bFirstName: bFirstName,
                        bLastName: bLastName,
                        bStreetAddress:bStreetAddress,
                        bCity: bCity,
                        bState: bState,
                        bEmail: bEmail,
                        identification: identification,
                        proofOfAddress: proofOfAddress
                     }, {headers : {Authorization: 'Bearer ' + res.data.token}})
                     .then((res) => {
                        console.log(res.data + res.statusText) 
                        if(res.statusText === 'OK'){
                            this.props.history.push('/dashboard')
                        }
                    })
                    
                 }
                    
                     
             })
         }
    })
    }

    
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 3? 4: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }

      get previousButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        // ...else return nothing
        return null;
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <4){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        // ...else render nothing
        return null;
      }

      handleFileUpload = (e) => {
        const {name} = e.target
        this.setState({
            [name]: e.target.files[0],
            loaded: 0
          }, () => {
            console.log(this.state)
          })
          
          console.log(e.target.files[0])

          

      }
    
    // Render UI will go here...
    render() {    
        return (
          <React.Fragment>
        
          <p>Step {this.state.currentStep} </p> 
            
          <Form onSubmit={this.handleSubmit}>
          
            {/* // Render the form steps and pass in the required props */}
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              firstName = {this.state.firstName}
              lastName = {this.state.lastName}
              streetAddress=  {this.state.streetAddress}
              city=  {this.state.city}
              state=  {this.state._state}
              zip = {this.state.zip}
              email={this.state.email}
              username={this.state.username}
              password={this.state.password}

            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              occupation =  {this.state.occupation}
              incomeSource =  {this.state.incomeSource}
            />

            <Step3
            currentStep={this.state.currentStep} 
            handleFileUpload={this.handleFileUpload}
            // identification=  {this.state.identification}
            // proofOfAddress=  {this.state.proofOfAddress}
            />


            <Step4 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}

              bFirstName ={this.state.bFirstName}
              bLastName={this.state.bLastName}
              bStreetAddress={this.state.bStreetAddress}
              bCity={this.state.bCity}
              bState={this.state.bState}
              bZip = {this.state.bZip}
              bEmail={this.state.bEmail}
            />       
             {this.previousButton}
            {this.nextButton}
      
          </Form>
          </React.Fragment>
        )
        }
  }
  export default MasterForm
