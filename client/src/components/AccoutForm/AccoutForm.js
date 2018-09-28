import React, { Component } from 'react';
import {Form, Input, Button} from 'antd';

import DefaultAvatar from 'assets/images/default-avatar.svg';
import './AccountForm.css';

const FormItem = Form.Item;

class AccoutForm extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        downloadedAvatar: '',
        backgroundImage: ''
    };

    cleanObject(obj) {
      Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const {city, country} = values

          if(this.state.downloadedAvatar) {
            values = {...values, avatar: this.state.downloadedAvatar}
          }
          if(this.state.backgroundImage) {
            values = {...values, background: this.state.backgroundImage}
          }

          values.address = {
            city,
            country
          }

          this.cleanObject(values)
          this.props.submitAction(values)
        }
      });
    }

    onAvatarChange = (evt) => {
        let tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onload = () => {
                this.refs['avatar'].src = fr.result;
                this.setState({
                  downloadedAvatar: fr.result
                })
            }
            fr.readAsDataURL(files[0]);
        }
        else {
           console.error('not allowed format')
        }
    }

    onBackgroundChange = (evt) => {
      let tgt = evt.target || window.event.srcElement,
          files = tgt.files;

      if (FileReader && files && files.length) {
          let fr = new FileReader();
          fr.onload = () => {
              this.refs['background'].src = fr.result;
              this.setState({
                backgroundImage: fr.result
              })
          }
          fr.readAsDataURL(files[0]);
      }
      else {
         console.error('not allowed format')
      }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { auth } = this.props;
        const { backgroundImage } = this.state;

        return(
             <Form onSubmit={this.handleSubmit}  className="component-wrapper component-wrapper-account-form">
                <div className="accout-form-avatar-block">
                  <div>
                    <img ref={"avatar"} id={"user-avatar"} alt="user-avatar" src={auth.authInfo.avatar || DefaultAvatar} />
                    <input
                        type="file"
                        onChange={this.onAvatarChange}
                        accept="image/x-png,image/gif,image/jpeg,image/png"
                      >
                    </input>
                  </div>

                  <div>
                    <img ref={"background"} id={"user-background"} alt="user-background" src={auth.authInfo.background || backgroundImage} />
                    <input
                      type="file"
                      onChange={this.onBackgroundChange}
                      accept="image/x-png,image/gif,image/jpeg,image/png"
                    >
                    </input>
                  </div>

                </div>
                {/*
                   <FormItem
                        label="E-mail"
                      >
                        {getFieldDecorator('email', {
                          rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }],
                        })(
                          <Input />
                        )}
                  }
                  </FormItem>
                */}

                <FormItem
                      label="Full name"
                    >
                      {getFieldDecorator('name', {
                        rules: [{
                          type: 'string', message: 'The input is not valid name!',
                        }],
                      })(
                        <Input />
                      )}
                </FormItem>

                <h3>Address info</h3>
                <div className="account-form-address-block">
                  <FormItem
                        label="city"
                      >
                        {getFieldDecorator('city', {
                          rules: [{
                            type: 'string', message: 'The input is not valid name!',
                          }],
                        })(
                          <Input />
                        )}
                  </FormItem>
                  <FormItem
                        label="country"
                      >
                        {getFieldDecorator('country', {
                          rules: [{
                            type: 'string', message: 'The input is not valid country!',
                          }],
                        })(
                          <Input />
                        )}
                  </FormItem>
                </div>

                <h3>Profile info</h3>
                <div className="account-form-profile-block">
                  <FormItem
                        label="age"
                      >
                        {getFieldDecorator('age', {
                          rules: [{
                            type: 'number', message: 'The input is not valid age!',
                          }],
                        })(
                          <Input />
                        )}
                  </FormItem>
                <FormItem
                      label="Short charactiristic"
                      >
                        {getFieldDecorator('about', {
                          rules: [{
                            type: 'string', message: 'The input is not valid about!',
                          }],
                        })(
                          <Input />
                        )}
                  </FormItem>
                </div>

                <FormItem>
                  <Button type="primary" htmlType="submit">Update</Button>
                </FormItem>
            </Form>
        )
    }
}

const WrappedAccoutForm = Form.create()(AccoutForm);

export default WrappedAccoutForm;
