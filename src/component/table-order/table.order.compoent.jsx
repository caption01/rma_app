import React from 'react'

// ant design
import { Table, Button } from 'antd';
import { Popconfirm } from 'antd';

// redux
import { connect } from 'react-redux'
import { setServeStatus, fetchingDataLoading, loadData, fetchingClearOrder, fetchingCloseOrder } from '../../redux/order/order.action'



class TableOrder extends React.Component {
    

    handleServeChange = (orderItem) => {
        this.props.fetchCloseOrder(orderItem)
    };

    // componentDidMount = () => {
    //     this.props.fetchData()
    // }

    clearOrder = (orderItem) => {
        this.props.fetchClearOrder(orderItem)
    }

    render(){

        const { show } = this.props

        const columns = [
            {
              title: 'ID',
              dataIndex: 'order_id',
              key: 'order_id',
              ellipsis: true,
            },
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
                title: 'Table_Number',
                dataIndex: 'table_number',
                key: 'table_number',
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
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                // sorter: (a, b) => a.address.length - b.address.length,
                // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
                render: (text, record) =>
                <div>
                    {
                        show ? 
                        <Popconfirm title="Sure to serve?" onConfirm={() => this.handleServeChange(record)}>
                            <Button type="primary">Serve</Button>
                        </Popconfirm> :
                        <Popconfirm title="food is served?" onConfirm={() => this.clearOrder(record)}>
                            <Button type="danger">Confirm</Button>
                        </Popconfirm>
                    }
                    
                </div>
            }
        ];

        return(
            <div className='table-order-container'>

                    <Table 
                        columns={columns} 
                        dataSource={this.props.orderList.filter(data => data.status === show)} 
                        onChange={this.handleChange} 
                    />

            </div>
        )
    }

} 

// const mapStateToProps = createStructuredSelector ({
//     orderList: selectOrderLists
// })


const mapDispatchToProps = dispatch => ({
    setServe: (newOrderList) => dispatch(setServeStatus(newOrderList)),
    loadData: (data) => dispatch(loadData(data)),
    fetchData: () => dispatch(fetchingDataLoading()),
    fetchClearOrder: (data) => dispatch(fetchingClearOrder(data)),
    fetchCloseOrder: (data) => dispatch(fetchingCloseOrder(data))
})

export default connect(null, mapDispatchToProps ) (TableOrder);
