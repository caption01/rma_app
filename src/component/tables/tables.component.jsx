import React from 'react'

// ant design
import { Card, Icon, Avatar, Popover } from 'antd';
import { Statistic } from 'antd';
import { Modal } from 'antd';
import { InputNumber } from 'antd';

// redux
import { connect } from 'react-redux'
import { setDataTable } from '../../redux/table/table.action'

class TablesComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            visible: false,
            confirmLoading: false,
            size: 1,
            role: 'customer'
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = async () => {

        const dataToCreateUser = {
            role: this.state.role,
            size: this.state.size,
            table_number: this.props.table.number
        }

        try {
            const result = await fetch(`http://localhost:3000/users`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(dataToCreateUser)
            })

            this.setState({
                visible: false,
                confirmLoading: false,
            })

            setTimeout(()=>{
                this.fetchTablesDataTest()
            }, 500)

        } catch (err) {
            alert(`${err}`)
        }

    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    onFinish = () => {
       this.handleCloseBillAutomate();

       setTimeout(()=>{
        this.fetchTablesDataTest()
       }, 1000)
    }

    onSizeChange = (size) => {
        this.setState({
            size: size
        })

    }

    DeleteConfirm = () => {

        const { confirm } = Modal;

        const handleCloseBill = () => {
            fetch(`http://localhost:3000/bills/${this.props.table.user_key}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT'
            }).catch(err => alert('bills close error'))
        }

        const fetchTablesDataTest2 = async () => {

            try {
                const resultTest = await fetch(`http://localhost:3000/tables`)
                const resultTestJson = await resultTest.json()
                this.props.setDataTable(resultTestJson)
            } catch (err) {
                console.log(`cant fetch table data ${err}`)
            }
    
        }

        confirm({
            title: 'Are you sure to close bill?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleCloseBill()
                setTimeout(()=>{
                    fetchTablesDataTest2()
                   }, 500)
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }

    handleCloseBillAutomate = () => {
        fetch(`http://localhost:3000/bills/${this.props.table.user_key}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).catch(err => alert('bills close error'))
    }


    fetchTablesDataTest = async () => {

        try {
            const resultTest = await fetch(`http://localhost:3000/tables`)
            const resultTestJson = await resultTest.json()
            this.props.setDataTable(resultTestJson)
        } catch (err) {
            console.log(`cant fetch table data ${err}`)
        }

    }

    render() {

        const { table } = this.props
        const { name, number, time_end, qrcode, status } = table

        const { Meta } = Card;
        const { Countdown } = Statistic;

        const deadline = new Date(time_end);

        const { visible, confirmLoading } = this.state;


        return (
            <div className='table-card-container' style={status ? { margin: '1rem 1rem' } : { margin: '1rem 1rem', opacity: '1' }} >
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <Icon 
                            type="check-circle" 
                            theme="twoTone" 
                            twoToneColor="#52c41a" 
                            onClick={this.showModal}
                            style={status? {opacity: '1', fontSize: '20px'}: {opacity: '0.2', fontSize: '20px'}}
                        />,
                        <Icon 
                            type="close-circle" 
                            theme="twoTone" 
                            twoToneColor="#eb2f96" 
                            onClick={() => this.DeleteConfirm()} 
                            style={status? {opacity: '0.2', fontSize: '20px'}: {opacity: '1', fontSize: '20px'}}
                        />
                    ]}
                    hoverable
                    title={`${name} ${number}`}
                    extra={
                        <Popover placement="rightTop"
                            content={(
                                <div>
                                    <img alt='code' src={qrcode} />
                                </div>
                            )}
                            title="Scan me" trigger="click">
                            <Icon type="qrcode" style={status? {opacity: '0.2'}: {opacity: '1'}} />
                        </Popover>
                    }
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Time Left"
                        description={<Countdown value={deadline} onFinish={this.onFinish} valueStyle={{ fontSize: '1rem' }} />}
                        style={status? {opacity: '0.2'}: {opacity: '1'}}
                    />
                </Card>

                <Modal
                    title="Customer Infomation"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>Table number {number}</p>
                    <p>Insert customer size</p>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={(value) => this.onSizeChange(value)} />
                </Modal>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setDataTable: (data) => dispatch(setDataTable(data))
})

export default connect( null, mapDispatchToProps)(TablesComponent)