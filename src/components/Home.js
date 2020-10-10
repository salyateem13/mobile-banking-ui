import React, {Component}  from 'react';
import Login from './Login/Login';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MasterForm from './Wizard/MasterForm';
import UserAccountOptions from './UserAccountOptions';
import Dashboard from './main/Dashboard/Dashboard';

class Home extends Component {
    constructor(context,props){
        super(context, props);
        this.state = {
            isMenuDisplay: true,
            isSignUpSelected: false,
            isLoginSelected: false,
            isAuth: false
        }
        this.change = this.change.bind(this);

    }
    
    
    change(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    //style={{marginTop: '200px'}}
    render(){
        return (
        <div  className="Home">
        <Container style={{
                display : 'flex-column', backgroundColor: 'lightgray', justifyContent: "center"
            }}>
       
                <Router>
                    {/* {   
                    this.state.isMenuDisplay &&
                    <Link onClick ={e => this.setState( (prevState) => ({isLoginSelected: !prevState.isLoginSelected, isMenuDisplay: !prevState.isMenuDisplay}))} to='/login'>Login</Link> 
                    }
                    {
                        this.state.isMenuDisplay &&
                    <Link onClick ={e => this.setState( (prevState) => ({isSignUpSelected: !prevState.isSignUpSelected, isMenuDisplay: !prevState.isMenuDisplay}))} to='/signup'>Sign Up</Link> 
                    } */}
                    
             <Col className="justify-content-md-center" >

                    <Route exact path="/" component={UserAccountOptions}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component = {MasterForm}></Route>
                    </Col>  

                    <PrivateRoute isAuth = {this.state.isAuth} path ='/dashboard' component ={Dashboard}/>
                </Router>
         
           
            
        
        <Row className="justify-content-md-center">
      <Col >
           
           { localStorage.getItem("token") !== undefined && <div>
                <h5>Disclosures</h5>
                <p> Investment products and services are fictional and do not exist. <br/>Neither a nenber of FINRA nor SIPC</p>
                <div> <p>INVESTMENT PRODUCTS AND SERVICES:</p>
                <p>NOT A DEPOSIT - NOT FDIC INSURED - NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY - NO BANK GUARUNTEE - NO VALUE EXISTS</p></div>
           </div> }
            </Col>
           </Row> 

          
        </Container>
        
         </div>
           



        )
    }
}

export default Home


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        localStorage.getItem('token') !== null
        ? <Component {...props} />
        : <Redirect to = '/'/>
    )} />
    )
    