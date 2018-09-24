import React, { Component } from 'react';
import {Form, Input, Select, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class AccoutForm extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.submitAction(values)
        }
      });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        return(
             <Form onSubmit={this.handleSubmit}  className="component-wrapper component-wrapper-account-form">
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
                </FormItem>

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
