import React, {Component}  from 'react';
import { Row, CardDeck, Card, CardGroup, Button, InputGroup, Form, FormControl, Col } from 'react-bootstrap';
import AccountCard from './AccountCard';
import axios from 'axios';
class AddAccount extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: undefined,
            _accounts: [],
            selectedAccount:'',
            fundingAmmount: '0000',
            accountName: ''

        }
       this.handleAddAccount = this.handleAddAccount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOpenAccount = this.handleOpenAccount.bind(this)
    }
  
    handleAddAccount (account) {
        this.setState({
            selectedAccount: account.acc_type
        }, ()=> {
            console.log(this.state.selectedAccount)
            
            
        })
        
    }

    handleOpenAccount (e){
        console.log('Buttton pressed')
           
             //build post request
                axios.post('/account',
                {
                    userid: JSON.stringify(this.state.user.user.id),
                    ACC_TYPE: this.state.selectedAccount,
                    is_auth: 'false',
                    balance: this.state.fundingAmmount,
                    name: this.state.accountName

    
                },
                {
                    headers : {Authorization: 'Bearer ' + this.state.user.token}
                })
                .then((res) => {
                    axios.get('/account/'+ this.state.user.user.id,
                    {
                        headers : {Authorization: 'Bearer ' + this.state.user.token}
                    }).then(res =>{
                        this.setState({
                            accounts: res.data
                        })
                    
                        
                    })
                })
            
    }


    // Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
      
    componentDidMount(){
        //get User from local storage
        const tokenObject =  JSON.parse( localStorage.getItem('token'))
       // console.log(user)
        //execute request to get account types offered
        const accounts =[{id: '0' , acc_type: 'CHECKING', name:'Checking Account', minBalance: '500', APR: '2.4%', description: ' Lorem ipsum solerum dolre forte dule irgis brevus'},
                        {id: '1' ,  acc_type: 'SAVINGS', name:'Savings Account',minBalance: '1000', APR: '2.2%', description: ' Lorem ipsum solerum dolre forte dule irgis brevus'}, 
                        {id: '2' ,  acc_type: 'MONEYMARKET',name:'Money Market Account',minBalance: '2000', APR: '2.0%', description: ' Lorem ipsum solerum dolre forte dule irgis brevus'},
                        {id: '3' ,  acc_type: 'CD', name:'CD Account',minBalance: '1500', APR: '2.2%', description: ' Lorem ipsum solerum dolre forte dule irgis brevus'},
                        {id: '4' ,  acc_type: 'CDIRA', name:'CD IRA Account', minBalance: '1500', APR: '2.8%', description: ' Lorem ipsum solerum dolre forte dule irgis brevus'}]

        this.setState({
            _accounts: accounts,
            user: tokenObject,

        })
    }
    render(){

      const  {_accounts}  = this.state;
      const listItem= _accounts.map((account) => 
                             <AccountCard selectedAccount={this.state.selectedAccount} handleAddAccount={(account) => this.handleAddAccount(account)} account={account} key={account.id.toString()}>
                          
                            </AccountCard>
                          
  )
        return (
             

            <div accounts={this.state._accounts} className="AddAccount">
               
                    <CardGroup>     
                    {listItem}
                    </CardGroup>
                    {
                         this.state.selectedAccount !== '' && this.state._accounts!== [] &&
                    <Form>
                         
                        <Form.Row>
                        <InputGroup className="">
                            <Col>
                            
                            <FormControl
                            placeholder="Account Number"
                            aria-label="Account Number"
                            />
                          
                            </Col>
                            <Col>
                            <FormControl
                            placeholder="Routing Number"
                            aria-label="Routing Number"
                            />
                           
                            </Col>
                            </InputGroup>  
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <InputGroup className="">
                            <FormControl
                                    placeholder="Account Name"
                                    aria-label="Account Name"
                                    value= {this.state.accountName}
                                    name='accountName'
                                    onChange={e => this.handleChange(e)}
                                />
                                <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                                <InputGroup.Text>000.00</InputGroup.Text>
                                </InputGroup.Prepend>
                                
                                <FormControl
                                    placeholder="Funding Ammount"
                                    aria-label="Amount (to the nearest cent)"
                                    name='fundingAmmount'
                                    value= {this.state.fundingAmmount}
                                    onChange={e => this.handleChange(e)}
                                />
                               
                                 <InputGroup.Append>
                                <Button value={this.state.accounts} onClick = {(e) => this.handleOpenAccount(e)} variant="outline-secondary">Open Account</Button>
                                </InputGroup.Append>
                            </InputGroup>
                           
                            
                            </Col>
                        </Form.Row>
                       
                       
                    </Form>
                                   
                }
              
              
            </div>
        )
    }
}

export default AddAccount



