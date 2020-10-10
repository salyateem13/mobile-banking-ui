import React , {Component} from 'react';
import AddAccount from '../AddAccount';
import Accounts from './Accounts'
import axios from 'axios'
class Dashboard extends Component {
 constructor(context,props){
     super(context, props);
     this.state = {
       _accounts: [],
       handler: undefined,
        
     }
     this.handleChange = this.handleChange.bind(this)

 }

componentWillMount () {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token.user.id)
    axios.get('/account/'+ token.user.id,
                    {
                        headers : {Authorization: 'Bearer ' + token.token}
                    }).then((res)=> {
                        
                        this.setState({
                            _accounts : res.data
                        }, ()=>{
                            console.log(this.state._accounts)
                        })
                    })
  
}
handleChange(accounts) {
    console.log("state changed")
    this.setState({
      accounts: accounts
    })   
  }

 render() {
    return(
        <div>
    {this.state._accounts.length === 0 &&
        
            <div accounts={this.state._accounts} className="addAccount">   
                 <AddAccount handler={this.handleChange}></AddAccount>
             </div>
            
        }
        {this.state._accounts.length !== 0 &&
            <div className="accounts">   
            <Accounts accounts={this.state._accounts}></Accounts>
             </div>}
    
        </div>
    )
    
     
 }
}

export default Dashboard