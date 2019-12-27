import React from 'react'

// ant design
import { Card, Row, Col, Statistic } from 'antd';

import './profile.style.scss'

const ProfileContainer = (props) => {

    const { userKey, timeEnd, Price, tableNumber } = props.userData.data

    const { Meta } = Card;
    const { Countdown } = Statistic;

    const onFinish = () => {
        handleCloseBillAutomate()
      }

    const handleCloseBillAutomate = () => {
        fetch(`http://localhost:3000/bills/${userKey}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(result => console.log('clsoe bill status automate'))
        .catch(err => alert('bills close error'))
    }


    return (
        <div className='profile-container' style={{ width: '80%', margin: 'auto' }}>
            <Row gutter={[24, 24]} justify='center' >
                <Col md={24} xs={24} lg={12}>
                    <div className='profile-card'>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title={userKey} />
                        </Card>
                    </div>
                </Col>
                <Col md={24} xs={24} lg={12}>
                    <div className='profile-info'>
                        <Row  gutter={[24,24]} align='middle'>
                            <Col sm={12} xs={12}>
                                <h1>Time left:</h1>
                            </Col>
                            <Col sm={12} xs={12}>
                                <Countdown value={timeEnd} onFinish={()=>onFinish()} />
                            </Col>
                        </Row>
                        <Row  gutter={[24,24]} align='middle'>
                            <Col sm={12} xs={12}>
                                <h1>Price :</h1>
                            </Col>
                            <Col sm={12} xs={12}>
                                <h1>{Price} Bath</h1> 
                            </Col>
                        </Row>
                        <Row  gutter={[24,24]} align='middle'>
                            <Col sm={12} xs={12}>
                                <h1>Your table:</h1>
                            </Col>
                            <Col sm={12} xs={12}>
                                <h1>{tableNumber}</h1>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default ProfileContainer