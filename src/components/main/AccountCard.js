import React, {Component}  from 'react';
import { Row, CardDeck, Card, CardGroup, Button } from 'react-bootstrap';

class AccountCard extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <Card className="text-center p-3">
            <Card.Body>
                <Card.Header>{this.props.account.name}</Card.Header>
                <Card.Title>{this.props.account.APR} APR</Card.Title>
                <Card.Text>{this.props.account.description}</Card.Text>
                <Card.Footer>Minimum Deposit of ${this.props.account.minBalance} Required </Card.Footer>
                <Button onClick={() => this.props.handleAddAccount(this.props.account)} variant="primary" size="lg" block>
                    Create Account
                </Button>
            </Card.Body>
        </Card>
        )}
    
    
}
export default AccountCard