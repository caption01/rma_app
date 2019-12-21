import React from 'react'

//ant design
import {Button } from 'antd';

// component
import TableOrder from '../table-order/table.order.compoent'


class OrderContainer extends React.Component {  

    render(){

    const { selectDisplay } = this.props

    return(
        <div className='order-container'>
            <div>
                <div className="table-operations">
                <Button onClick={this.setAgeSort}>Sort by Time</Button>
                </div>

                {
                    selectDisplay === '1' ?
                    <TableOrder show={true} /> :
                    <TableOrder show={false} />
                }


            </div>
        </div>
    )
}  
    
}

export default OrderContainer