import React, { useHistory } from 'react';
import {Link} from 'react-router-dom';
import SignIn from '../SignIn';
import './Button.css';

function Button(props) {
    const history = useHistory;
    const handleroute = () => {
        history.push("/signIn")
    }

    
    return (
        <div>
            <Link to ='/signIn'onClick={SignIn}>
                <button className="btn " >
                   Sign In
                 </button>
            </Link>
        </div>
    );
}

export default Button;