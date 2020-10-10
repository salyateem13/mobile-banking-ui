import React, {Component}  from 'react';
import { Container, Row, CardDeck, Card, CardGroup, Button, InputGroup, Form, FormControl, Col } from 'react-bootstrap';
import AccountDisplayCard from './AccountDisplayCard';
class Accounts extends Component {
    constructor(props){
        super(props);

        this.state = {
            accounts: []
        }
    }
    componentDidMount() {
        this.setState({
            accounts : this.props.accounts
        }, ()=>{
           console.log( this.state.accounts)
        })
    }
    render(){
        
      const  {accounts}  = this.state;
      const listItem= accounts.map((account) => 
                             <AccountDisplayCard  sm key={account.id.toString()} account={account} >
                          
                            </AccountDisplayCard>)
        return (
            <div className="AddAccount">
         
            <Col xs={12} className="justify-content-md-center">
            <CardDeck >
                    {listItem}
                </CardDeck>
            </Col>
            <Button >Add Account</Button>

        
            
            </div>
        )
    }
}

export default Accounts