import React from 'react'

// ant design
import { Table, Tag  } from 'antd';

// redux
import { connect } from 'react-redux'
import { selectUserData } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

class OrderInQue extends React.Component {

    state = {
        orderInQue: []
    }
    
    fetchOrderInQue = () => {
        fetch(`http://localhost:3000/orders/${this.props.userData.data.tableNumber}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    orderInQue: result
                })
            })
            .catch(err => console.log(`fetchOrderInQue ps err ${err.message}`))
    }

    componentDidMount = () => {
        setInterval(()=>{
            this.fetchOrderInQue()
        }, 1000)
    }

    render(){

        const columns = [
            {
              title: 'Menu',
              dataIndex: 'name',
              key: 'menu',
              ellipsis: true,
            },
            {
              title: 'Unit',
              dataIndex: 'unit',
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
                    <Tag color={'red'} key={'key-test'}>
                        Cooking
                    </Tag> 
                )
            }
        ];

        return(
            <div className='table-order-container'>

                    <Table 
                        columns={columns} 
                        dataSource={this.state.orderInQue} 
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

export default connect(mapStateToProps, null) (OrderInQue);
