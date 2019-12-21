import React from 'react'

// ant design
import { Table } from 'antd';
import { Popconfirm } from 'antd';
// redux
import { connect } from 'react-redux'
import { setServeStatus } from '../../redux/order/order.action'



class TableOrder extends React.Component {

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
      };
    
    handleServeChange = async (key) => {

        const data = [
            ...this.props.orderLists
        ];

        const updateOrderList = data.map((data) => data.key===key? {...data, status:false} : data)

        this.props.setServe(updateOrderList)


    };
    
    render(){

        const { orderLists, show } = this.props

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
                        dataSource={orderLists.filter(data => data.status === show)} 
                        onChange={this.handleChange} 
                    />

            </div>
        )
    }

} 


const mapDispatchToProps = dispatch => ({
    setServe: (newOrderList) => dispatch(setServeStatus(newOrderList))
})



export default connect(null, mapDispatchToProps ) (TableOrder);
