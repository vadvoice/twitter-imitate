import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, message } from 'antd';
import { Spin } from 'antd';
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } from 'actions/types';
import axios from 'axios'

class SignIn extends Component {

    state = {
        password: '',
        email: ''
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


    handleSubmitLogin = (e) => {
        e.preventDefault()

        const { email, password } = this.state
        const authBody = {
            email: `${email}`,
            password: password
        }
        this.props.loginRequest(authBody)
        axios.post('login', authBody)
            .then(response => {
                message.success(`Success login: ${response.data.auth}`)
                this.props.loginSuccess(response.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err.response)
                message.error(err.response.data)
                this.props.loginFaild(err.response.data)
                console.error(err.response)
            })
    }

    render() {
        const { email, password } = this.state
        return(
            <div className="component-wrapper component-wrapper-login">

            <form onSubmit={ this.handleSubmitLogin }>
                <Input
                    placeholder="someemail@gmail.com"
                    name="email"
                    required={true}
                    value={ email }
                    onChange={ this.handleInputLogin }
                >
                </Input>
                <Input
                    placeholder="password"
                    name="password"
                    type="password"
                    required={true}
                    value={ password }
                    onChange={ this.handleInputLogin }
                >
                </Input>
                <Button
                    type="primary"
                    htmlType="submit"
                >Submint</Button>
            </form>

            <div>{this.props.auth.loginWaiting && <Spin size="large" />}</div>

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
    return({
        loginRequest: (credentials) => dispatch({
            type: LOGIN_REQUEST,
            payload: credentials
        }),
        loginFaild: (error) => dispatch({
            type: LOGIN_FAIL,
            payload: error
        }),
        loginSuccess: (auth) => dispatch({
            type: LOGIN_SUCCESS,
            payload: auth
        })
    })
}

export default connect(putStateToProps, putActionsToProps)(SignIn);