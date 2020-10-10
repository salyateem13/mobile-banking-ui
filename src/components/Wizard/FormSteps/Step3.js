import React from 'react';
import {Row, Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap';


class Step3 extends React.Component {

    constructor(context,props){
        super(context, props);
        this.state ={

        }

    }

    fileSelectedHandler = event => {
      console.log(event)
    }
    render() {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 3 UI
      return(
        <div className="form-group">
         <Row>
            <Col>
                <FormGroup>
                  <FormLabel  htmlFor="identification">Identification (PDF)</FormLabel>
                  <FormControl accept="application/pdf" name="identification" id="identification" placeholder="Enter Identification" type="file"  onChange={this.props.handleFileUpload}/>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel htmlFor="proofOfAddress">Proof of Address (PDF)</FormLabel>
                  <FormControl accept="application/pdf" name="proofOfAddress" id="proofOfAddress" placeholder="Enter Proof of Address" type="file"  onChange={this.props.handleFileUpload}/>
                </FormGroup>
              </Col>
          </Row>
    
     
      </div>
      )
    }
  }

  export default Step3;