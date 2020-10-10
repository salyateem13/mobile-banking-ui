import React, {Component}  from 'react';
import { Row, CardDeck, Card, CardGroup, Button } from 'react-bootstrap';

class AccountDisplayCard extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <Card className="text-center">
            <Card.Body>
                <Card.Header></Card.Header>
                <Card.Title>{this.props.account.name}</Card.Title>
                
                <Card.Footer> ${this.props.account.balance} </Card.Footer>
            </Card.Body>
        </Card>
        )}
    
    
}
export default AccountDisplayCard