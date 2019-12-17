import React from 'react'

//redux
import { connect } from 'react-redux';
import { loginStaff } from '../../redux/staff/staff.action';
import { createStructuredSelector } from 'reselect'
import { selectRoleStaff, selectStatusStaff } from '../../redux/staff/staff.selector'

//ant-design
import { Form, Icon, Input, Button, Typography  } from 'antd';

import './login.style.scss'

class LoginComponent extends React.Component {

    handleLogin = async (id, pass) => {

        const staff = {
            staff_id: id,
            staff_pass: pass
        }
        
        fetch('http://localhost:3000/staff', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(staff)
        }).then(result => result.json())
        .then(result => {
            if(result.length){
                console.log('success loggin')
                this.props.loginStaff(result[0])
            } else {
                alert('user not found')
            }
        })
        .catch(err =>console.log(`cant login ${err}`))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.handleLogin(values.username, values.password)
          }
        })
      }

    render(){

        const { getFieldDecorator } = this.props.form;
        const { Text } = Typography;

        return(
            <div className='login-container'>
                <Form onSubmit={this.handleSubmit} className="login-form" layout='horizontal' type='flex' justify="center">
                    <Form.Item>
                        <Text code>staff login</Text>
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Text code>get QR-code</Text>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Customer
                        </Button>
                    </Form.Item>
                    
                </Form>
            </div>

        )

    }

    
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginComponent)

const mapStateToProps = createStructuredSelector({
    staffStatus: selectStatusStaff,
    staffRole: selectRoleStaff
})

const mapDispatchToProps = {
    loginStaff: loginStaff
}

export default   connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)