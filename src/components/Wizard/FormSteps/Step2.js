import React from 'react';
import {Row, Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
class Step2 extends React.Component {

    render() {
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 2 UI
      return(
        <div className="form-group">

        <Row>
            <Col>
                <FormGroup>
                    <FormLabel htmlFor="occupation">Occupation</FormLabel>
                    <FormControl as="select" className="form-control"
                            id="occupation"
                            name="occupation"
                            type="text"
                            placeholder="Enter occupation"
                            value={this.props.occupation}
                            onChange={this.props.handleChange}>
                                <option>Management</option>
                                <option>Business and Finance</option>
                                <option>Computer and Mathematics</option>
                                <option>Architecture and Engineering</option>
                                <option>Life Physical and Social Services</option>
                                <option>Legal</option>
                                <option>Medical</option>
                                <option>Other</option>
                            </FormControl>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <FormLabel htmlFor="incomeSource">Income Source</FormLabel>
                    <FormControl as="select" className="form-control"
                            id="incomeSource"
                            name="incomeSource"
                            type="text"
                            placeholder="Enter income source"
                            value={this.props.incomeSource}
                            onChange={this.props.handleChange}>
                                <option>Investment</option>
                                <option>Labor</option>
                                <option>Retirement</option>
                                <option>Other</option>
                            </FormControl>
                </FormGroup>
            </Col>
        </Row>

      </div>
      )
    }
  }

  export default Step2;