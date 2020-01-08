import React from 'react'

//ant design
import {Row, Col} from 'antd'

//component
import Logo from '../component/logo/logo.component'
import LoginComponent from '../component/login/login.component'
import BackGround from '../component/background/background.component'

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    fetchToLoadQRcode = () => {
        fetch('http://localhost:3000/bills/ABCD-ABCD-ABCD-ABCD')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({url: res.bill_qrcode})
            })
    }

    componentDidMount(){
    }
    

    render(){

        return(
            <div className='homepage-container'>
                <BackGround />
                <Row  type="flex" justify="space-between" align="middle" style={{ minHeight: '90vh' }}>
                    <Col span={12} >
                        <Logo />
                    </Col>
                    <Col span={12} >
                        <LoginComponent />
                    </Col>
                </Row>
            </div>
        )
    }
}
    
export default HomePage