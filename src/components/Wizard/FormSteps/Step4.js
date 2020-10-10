import React from 'react';
import {Row, Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap';

class Step4 extends React.Component {

    render() {
      if (this.props.currentStep !== 4) { // Prop: The current step
        return null
      }
      // The markup for the Step 4 UI
      return(
        <React.Fragment>
        <div className="form-group">
            <Row>
                <Col>
                 <FormGroup controlId="firstName" >
                     <FormLabel>First Name</FormLabel>
                     <FormControl type='text' name='bFirstName' placeholder="John/Jane" onChange={this.props.handleChange} value ={this.props.bFirstName}/>
                 </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="lastName" >
                        <FormLabel >Last Name</FormLabel>
                        <FormControl type='text' name='bLastName' placeholder="Doe" onChange={this.props.handleChange} value ={this.props.bLastName}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="streetAddress" >
                        <FormLabel>Street Address</FormLabel>
                        <FormControl  type='text' name='bStreetAddress' placeholder="1234 Wall St" onChange={this.props.handleChange} value ={this.props.bStreetAddress}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="city" >
                        <FormLabel>City</FormLabel>
                        <FormControl type='text' name='bCity' placeholder="New York" onChange={this.props.handleChange} value ={this.props.bCity} />
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup controlId="state" >
                        <FormLabel>State</FormLabel>
                            <FormControl as="select" is="bState" type='text' name='bState' placeholder="NY" onChange={this.props.handleChange} value ={this.props.bState}>
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
                         <FormControl type='zip' name='bZip' placeholder="Enter email" onChange={this.props.handleChange} value ={this.props.bZip}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                
                    <FormGroup controlId="email" >
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' name='bEmail' placeholder="Enter email" onChange={this.props.handleChange} value ={this.props.bEmail}/>
                    </FormGroup>
                </Col>
            </Row>
    
        </div>
        <button className="btn btn-success btn-block">Sign up</button>
        </React.Fragment>
      )
    }
  }

  export default Step4;