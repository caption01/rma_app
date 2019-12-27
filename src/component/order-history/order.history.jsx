import React from 'react'

// ant design
import { Table, Tag  } from 'antd';

// redux
import { connect } from 'react-redux'
import { selectUserData } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

class OrderHistory extends React.Component {

    state = {
        orderHistory: []
    }
    
    fetchOrderHistory = () => {
        fetch(`http://localhost:3000/orders/history/${this.props.userData.data.billId}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    orderHistory: result
                })
            })
            .catch(err => console.log(`fetchOrderHistory ps err ${err.message}`))
    }

    componentDidMount = () => {
        setInterval(()=>{
            this.fetchOrderHistory()
        }, 1000)
    }

    render(){

        const columns = [
            {
              title: 'Menu',
              dataIndex: 'menu_name',
              key: 'menu',
              ellipsis: true,
            },
            {
              title: 'Unit',
              dataIndex: 'quantity',
              key: 'quantity',
              ellipsis: true,
            },
            {
                title: 'Time',
                dataIndex: 'createdAt',
                key: 'createdAt',
                // sorter: (a, b) => a.address.length - b.address.length,
                // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
            },{
                title: 'Process',
                dataIndex: 'name',
                key: 'name',
                // sorter: (a, b) => a.address.length - b.address.length,
                // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
                render: () => (
                    <Tag color={'green'} key={'key-test'}>
                        Success
                    </Tag> 
                )
            }
        ];

        return(
            <div className='table-order-container'>

                    <Table 
                        columns={columns} 
                        dataSource={this.state.orderHistory} 
                        onChange={this.handleChange} 
                    />

            </div>
        )
    }

} 

const mapStateToProps = createStructuredSelector ({
    userData: selectUserData
})


// const mapDispatchToProps = dispatch => ({
//     setServe: (newOrderList) => dispatch(setServeStatus(newOrderList)),
//     loadData: (data) => dispatch(loadData(data)),
//     fetchData: () => dispatch(fetchingDataLoading()),
//     fetchClearOrder: (data) => dispatch(fetchingClearOrder(data)),
//     fetchCloseOrder: (data) => dispatch(fetchingCloseOrder(data))
// })

export default connect(mapStateToProps, null) (OrderHistory);
