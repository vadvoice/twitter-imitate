import React, { Component } from 'react';
import {Form, Input, Button} from 'antd';

import DefaultAvatar from 'assets/images/default-avatar.svg';
import './AccountForm.css';

const FormItem = Form.Item;

class AccoutForm extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        downloadedAvatar: ''
    };

    cleanObject(obj) {
      Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if(this.state.downloadedAvatar) {
            values = {...values, avatar: this.state.downloadedAvatar}
          }

          this.cleanObject(values)
          console.log('cleaned:::', values)
          this.props.submitAction(values)
        }
      });
    }

    onAvatarChange = (evt) => {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
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

    render() {
        const { getFieldDecorator } = this.props.form;
        const { downloadedAvatar } = this.state;

        return(
             <Form onSubmit={this.handleSubmit}  className="component-wrapper component-wrapper-account-form">
                <div className="accout-form-avatar-block">
                  <img ref={"avatar"} id={"user-avatar"} alt="user-avatar" src={downloadedAvatar ? downloadedAvatar : DefaultAvatar} />
                  <input
                      type="file"
                      onChange={this.onAvatarChange}
                      accept="image/x-png,image/gif,image/jpeg,image/png"
                    >
                    </input>
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
                

                <div className="account-form-address-block">
                  <p>Address info</p>
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

                <FormItem>
                  <Button type="primary" htmlType="submit">Update</Button>
                </FormItem>
            </Form>
        )
    }
}

const WrappedAccoutForm = Form.create()(AccoutForm);

export default WrappedAccoutForm;
