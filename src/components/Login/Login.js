import React , {Component} from 'react';
import NewUserButton from '../Wizard/NewUserButton';
// import SignUpForm from '../SignUp/SignUpForm'
import LoginForm from './LoginForm';
import MasterForm from '../Wizard/MasterForm';

class Login extends Component {
 constructor(context,props){
     super(context, props);
     this.state = {
       
         isEmptyState: true
     }
 }



 routeToSignUp() {
}

triggerSignUpState = () => {
    this.setState({
      isEmptyState: false,
      isNewUserState: true
    })
  }
 render() {

    return(
    <div className="Login">   
         <div>
           {this.state.isEmptyState && <LoginForm></LoginForm>}
            {this.state.isEmptyState &&  <NewUserButton newUser = {this.triggerSignUpState}/>}
           {this.state.isNewUserState && <MasterForm />}
         </div>
     </div>
    )
     
 }
}

export default Login