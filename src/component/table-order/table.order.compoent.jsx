import React from 'react'

// ant design
import { Table } from 'antd';
import { Popconfirm } from 'antd';

// redux
import { connect } from 'react-redux'
import { setServeStatus } from '../../redux/order/order.action'
import { loadData } from '../../redux/order/order.action'
import { createStructuredSelector } from 'reselect'
import { selectOrderLists } from '../../redux/order/order.selector'

// mock data
import { orderData } from '../../redux/order/order.data'


class TableOrder extends React.Component {

    handleServeChange = async (key) => {

        const data = [
            ...this.props.orderListtest
        ];

        const updateOrderList = data.map((data) => data.key===key? {...data, status:false} : data)

        this.props.setServe(updateOrderList)


    };

    componentDidMount = () => {
        this.props.loadData(orderData)
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
              dataIndex: 'menu',
              key: 'menu',
              ellipsis: true,
            },
            {
              title: 'Unit',
              dataIndex: 'unit',
              key: 'unit',
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
                dataIndex: 'date',
                key: 'date',
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
                        <Popconfirm title="Sure to serve?" onConfirm={() => this.handleServeChange(record.key)}>
                            <a>Serve</a>
                        </Popconfirm> :
                        <Popconfirm title="food is served?" onConfirm={() => this.handleServeChange(record.key)}>
                            <a>Confirm</a>
                        </Popconfirm>
                    }
                    
                </div>
            }
        ];

        return(
            <div className='table-order-container'>

                    <Table 
                        columns={columns} 
                        dataSource={this.props.orderListtest.filter(data => data.status === show)} 
                        onChange={this.handleChange} 
                    />

            </div>
        )
    }

} 

const mapStateToProps = createStructuredSelector ({
    orderListtest: selectOrderLists
})


const mapDispatchToProps = dispatch => ({
    setServe: (newOrderList) => dispatch(setServeStatus(newOrderList)),
    loadData: (data) => dispatch(loadData(data))
})

export default connect(mapStateToProps, mapDispatchToProps ) (TableOrder);
