import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, message } from 'antd';
import './SignUp.css';

class SignUp extends Component {

    state = {
        name: '',
        password: '',
        email: '',
        loginErrors: {}
    }

    handleInput = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    handleInputLogin = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, password, email } = this.state
        const authBody = {
            name: `${name}`,
            email: email,
            password: password,
        }

        // vanulla solution:
        fetch('register', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(authBody),
        })
            .then(response => {
                let json = response.json()
                if(!response.ok) {
                    return json.then(Promise.reject.bind(Promise));
                }
                return json
            })
            .then(res => {
                message.success(`success ${res.name}`);
            })
            .catch(err => {
                console.log(err)
            })

        // using axios package
        //  axios.post('register', authBody)
        //     .then(response => {
        //         this.props.loginSuccess(response)
        //         this.setState({
        //             loginErrors: {}
        //         })
        //         message.success(`success ${response}`);
        //       })
        //     .catch(err => {
        //         this.props.loginFaild(err.response.data)
        //         this.setState({
        //             loginErrors: err.response.data
        //         })
        //         message.error(`error ${err.response.data.message}`);
        //         console.error(err.response)
        //     })
    }


    render() {
        const { loginErrors } = this.state
        return(
            <div className="component-wrapper component-wrapper-login">
            <form onSubmit={ this.handleSubmit }>
                <Input
                    placeholder="name"
                    name="name"
                    // required={true}
                    value={ this.state.name }
                    onChange={ this.handleInput }
                >
                </Input>
                <Input
                    placeholder="email"
                    name="email"
                    // required={true}
                    value={ this.state.email }
                    onChange={ this.handleInput }
                >
                </Input>
                <Input
                    placeholder="password"
                    name="password"
                    type="password"
                    // required={true}
                    value={ this.state.password }
                    onChange={ this.handleInput }
                >
                </Input>
                <Button
                    type="primary"
                    htmlType="submit"
                >Submint</Button>
            </form>
            {
                loginErrors ? ['email', 'name', 'password'].map((key, index) => {
                    if(loginErrors.errors && loginErrors.errors[key]) {
                        return <p key={index}>{loginErrors.errors[key].message}</p>
                    } else {return ''}
                })
                :
                null
            }

            </div>
        )
    }
}

const putStateToProps = (state) => {
    return({
        ...state
    })
}

const putActionsToProps = (dispatch) => {
    return({})
}

export default connect(putStateToProps, putActionsToProps)(SignUp);