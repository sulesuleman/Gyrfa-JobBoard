import React, { createContext } from 'react';
import { Component } from 'react';
import { userEndpoint } from '../const';
import jwt from 'jsonwebtoken';

export const UserContext = createContext();

export class UserProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            userCreated: false,
            passwordsMatch: true
        }

        this.addUserToState = this.addUserToState.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.checkPasswordsMatch = this.checkPasswordsMatch.bind(this)
    }

    async saveUser(user) {
        try {
            const authorization = this.generateAuthorization({});
            const postUser = await fetch(`${userEndpoint}/api/user`, {
                headers: new Headers({
                    "Authorization": `Bearer ${authorization}`
                }),
                method: 'POST',
                body: JSON.stringify(user)
            }).then(function(response) {
                if (!response.ok) {
                    console.log("Hit an error");
                    console.error(response.statusText);
                }
                return response.json()
            });

            const returnValue = await postUser;
            const userCreated = returnValue === 'User created' ? true : false;
            console.log(userCreated);

            this.setState({ userCreated: userCreated });

        } catch (error) {
            console.error(error)
        }

    }

    checkPasswordsMatch(password, passwordConfirm) {
        const passwordsMatch = password === passwordConfirm ? false : true;
        this.setState({ passwordsMatch: passwordsMatch });
    }

    generateAuthorization(payload) {
        return jwt.sign(payload, 'GYRFAjobBOARD', { algorithm: 'HS256' })
    }

    addUserToState(user) {
        this.setState({
            users: {
                [user.email]: {
                    name: user.name,
                    phonenumber: user.phonenumber,
                    company: user.company
                }
            }
        })
    }


    render() {
        return (
            <UserContext.Provider value={{
                state: this.state,
                saveUser: this.saveUser,
                checkPasswordsMatch: this.checkPasswordsMatch
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
