import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import figure from './images/signup-image.jpg';
import './style.css';
const User = () => {
    const { saveUser, checkPasswordsMatch } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [company, setCompany] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    const updatePassword = (e) => {
        setPassword(e.target.value);
        checkPasswordsMatch(password, confirmPassword);
    }

    const updateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        checkPasswordsMatch(password, confirmPassword);
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePhonenumber = (e) => {
        setPhonenumber(e.target.value);
    }

    const updateCompany = (e) => {
        setCompany(e.target.value);
    }

    const submitUser = e => {
        e.preventDefault();
        saveUser({ email: email, name: name, phonenumber: phonenumber, company: company, password: password });
    }

    return (
        <UserContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <div>

                        {context.state.userCreated === true &&
                            <h1>Welcome To Gyrfa!</h1>
                        }
<div class='main'>
<section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form onSubmit={submitUser} className="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                
                                <input type="text" name="name" id="name" placeholder="Your Name"
                                 readOnly={context.state.userCreated} value={name} onChange={updateName} 
                                 />

                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>


                                <input type="email" name="email" id="email" placeholder="Your Email"
                                readOnly={context.state.userCreated} value={email} onChange={updateEmail}
                                />

                            </div>
                            <div class="form-group">
                                <label for="phone"><i class="zmdi zmdi-email"></i></label>

                                <input type="text" id="phone"  name="phonenumber" placeholder="phone number"
                                readOnly={context.state.userCreated} value={phonenumber} onChange={updatePhonenumber} 
                                />

                            </div>
                            
                            <div class="form-group">
                                <label for="company"><i class="zmdi zmdi-email"></i></label>
                                
                                <input type="text" name="company" id="company" placeholder="Company Name "
                                readOnly={context.state.userCreated} value={company} onChange={updateCompany}
                                />

                            </div>
                            
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>

                                <input type="password" name="password" id="pass" placeholder="Password"
                                readOnly={context.state.userCreated} value={password} onChange={updatePassword}
                                />
                                                     
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                
                                <input type="password" name="confirmPassword" id="re_pass" placeholder="Repeat your password"
                                readOnly={context.state.userCreated} value={confirmPassword} onChange={updateConfirmPassword}
                                />
                                {context.state.passwordsMatch === false &&
                                        <h3>Passwords Do Not Match</h3>
                                    }
                            </div>
                            
                            <div class="form-group form-button">
                                <input disabled={!context.state.passwordsMatch} type="submit" name="signup" id="signup" class="form-submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={figure} /></figure>
                        <Link class="signup-image-link" to="/">Back</Link>
                    </div>
                </div>
            </div>
        </section>
</div>
</div>
</React.Fragment>
)}
</UserContext.Consumer>
    )
}

export default User;