import React from 'react'

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { updateOrderList } from '../../redux/user/user.action';
import { selectUserData, selectBillStatus } from '../../redux/user/user.selector';

// ant design
import { Card, Icon  } from 'antd';
import { Tooltip } from 'antd';
import { Modal, Button } from 'antd';
import { Typography } from 'antd';

import './menu.style.scss';

// const data = {
//     name: 'eggyork',
//     description: 'fresh egg organic',
//     imageUrl: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Egg-Salad-3.jpg"
// }

class MenuComponent extends React.Component {

    state = { 
        visible: false,
        unit: 1 
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {

        const { data } = this.props

        let orderList = {
            name: data.name,
            unit: this.state.unit
        }

        const { status, billId, tableNumber } = this.props.userData.data

        let orderData = {
            status: true,
            table_number: tableNumber,
            bill_id: billId,
            order_list: [
                orderList
            ]
        }

        this.postOrder(orderData)

        this.setState({
          visible: false,
          unit: 1
        });
    };
    
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    handleUnitPlus = () => {
        this.setState({
            unit: this.state.unit + 1
        })
    }

    handleUnitMinus = () => {

        if(this.state.unit <= 1){
            return true
        } else {
            this.setState({
                unit: this.state.unit - 1
            })
        }
    }

    postOrder = (order) => {

        const { status } = this.props.userData.data

        if(status === 'close'){
            return alert('Time up !!')
        }

        fetch('http://localhost:3000/orders', {
            method: "POST",
		    mode: 'cors', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(order)
        }).then(result => alert('order was created'))
        .catch(err => console.log(err.message))
    }
   

    render(){

    const { data } = this.props
    const { Meta } = Card;
    const { Text } = Typography;

    return(
        <div className='menu-component' >
            <Card
                style={{ width: "100%" }}
                cover={
                <img
                    alt="menu"
                    src={data.imageUrl}
                />
                }
                hoverable={true}
                actions={[
                <Tooltip placement="top" title={'order me'} >
                    <Icon type="plus-circle" theme="twoTone" twoToneColor="#1d39c4" key='add' onClick={this.showModal} />
                </Tooltip>,
                <Tooltip placement="top" title={data.description}>
                    <Icon type="eye" theme="twoTone" twoToneColor="#1d39c4" key="message" />
                </Tooltip>
                ]}
                bodyStyle={{padding: "12px"}}
            >
                <Meta 
                    title={
                        <Text type="secondary" style={{color: "#000000"}}>{data.name}</Text>
                    } 
                />
            </Card>

            <Modal
            title={data.name}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={'200px'}
            >
            <div className='modal-container' style={{textAlign: 'center'}}>   
                <div className='modal-input'>
                    <h2> {this.state.unit} <span>: unit</span></h2>
                </div>
                <div className='modal-button' >
                    <span>
                        <Button type="primary"  icon="minus" size="small" style={{width: '45%', margin: '2px'}} onClick={()=>this.handleUnitMinus()} ></Button>
                    </span>
                    <span>
                        <Button type="primary"  icon="plus" size="small" style={{width: '45%', margin: '2px'}} onClick={()=>this.handleUnitPlus()} ></Button>
                    </span>
                </div>
            </div>
            </Modal>
        </div>
    )
}
}

const mapStateToProps = createStructuredSelector({
    userData: selectUserData
  })


const mapDispatchToProps = (dispatch) => ({
    updateOrderList: (orderList) => dispatch(updateOrderList(orderList))
  })
  

  export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);




      