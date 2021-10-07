import React, { Component } from 'react';

class SignIn extends Component {
    // onSubmit = () => {
    //     if(userFound){
    //         this.props.history.push('/');
    //     }
    //  }

    render() {
        return (
            <div>
                <form> 
                    <input placeholder="email" type="email" />
                    <input placeholder="password" type="password" />
                    <button>Login</button>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;