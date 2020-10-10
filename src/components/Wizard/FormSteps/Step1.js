import React from 'react';
import { FormGroup, FormControl, FormLabel, Row, Col} from 'react-bootstrap';
class Step1 extends React.Component {

   
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
    
            <Row>
                <Col>
                 <FormGroup controlId="firstName" >
                     <FormLabel>First Name</FormLabel>
                     <FormControl type='text' name='firstName' placeholder="John/Jane" onChange={this.props.handleChange} value ={this.props.firstName}/>
                 </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="lastName" >
                        <FormLabel >Last Name</FormLabel>
                        <FormControl type='text' name='lastName' placeholder="Doe" onChange={this.props.handleChange} value ={this.props.lastName}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="streetAddress" >
                        <FormLabel>Street Address</FormLabel>
                        <FormControl  type='text' name='streetAddress' placeholder="1234 Wall St" onChange={this.props.handleChange} value ={this.props.streetAddress}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="city" >
                        <FormLabel>City</FormLabel>
                        <FormControl type='text' name='city' placeholder="New York" onChange={this.props.handleChange} value ={this.props.city} />
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup controlId="state" >
                        <FormLabel>State</FormLabel>
                            <FormControl as="select" id="_state" type='text' name='_state' placeholder="State" onChange={this.props.handleChange} value ={this.props._state}>
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>ID</option>
                                <option>IN</option>
                                <option>LA</option>
                                <option>MN</option>
                                <option>ML</option>

                            </FormControl>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup as={Col} controlId="formGridZip">
                        <FormLabel>Zip</FormLabel>
                         <FormControl type='zip' name='zip' placeholder="Enter zipcode" onChange={this.props.handleChange} value ={this.props.zip}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                
                    <FormGroup controlId="email" >
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' name='email' placeholder="Enter email" onChange={this.props.handleChange} value ={this.props.email}/>
                    </FormGroup>
                </Col>
            </Row>
         
            <Row>
                <Col>
                    <FormGroup controlId="username" >
                        <FormLabel>Username</FormLabel>
                        <FormControl placeholder="Enter username" type='text' name='username' onChange={this.props.handleChange} value ={this.props.username}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="password" >
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' name='password' placeholder="Enter password" onChange={this.props.handleChange} value ={this.props.password}/>
                    </FormGroup>
                </Col>
            </Row>
            
           
           
           
           
        
        </div>
      )
    }
  }

  export default Step1;