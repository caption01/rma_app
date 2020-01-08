import React from 'react'

//ant design
import { Button } from 'antd';

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOrderLists } from '../../redux/order/order.selector'
import { fetchingDataLoading } from '../../redux/order/order.action'

// component
import TableOrder from '../table-order/table.order.compoent'




class OrderContainer extends React.Component {

    componentDidMount() {
        setInterval(()=>{
            this.props.fetchData()
        }, 2000)
    }

    render() {
        const { selectDisplay } = this.props
        return (
            <div className='order-container'>
                <div>
                    <div className="table-operations">
                        <Button onClick={this.setAgeSort}>Sort by Time</Button>
                    </div>
                    {console.log(this.props.orderList)}
                    {
                        selectDisplay == '1' ?
                            <TableOrder show={true} orderList={this.props.orderList} /> :
                            <TableOrder show={false} orderList={this.props.orderList} />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    orderList: selectOrderLists
})

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchingDataLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer) 