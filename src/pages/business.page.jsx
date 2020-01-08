import React from 'react'

// ant-design
import { Layout, Menu } from 'antd';

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { startFetchHistoryProcess, setIndexSelector, fetchHistoryWithDateSelect, startFetchHistoryUserProcess, FetchHistoryUserProcessWithDateSelect } from '../redux/history/history.action'
import { selectFoodHistory, selectHistoryIndex, selectUserHisroty } from '../redux/history/history.select'

// component
import BarChart from '../component/barchart/bar-chart.component'
import UserChart from '../component/userChart/userChart'

class BusinessPage extends React.Component {

    state = {
        menuIndex: '2'
    }



    componentDidMount = () => {
        this.props.startLoadingHistory()
        this.props.startFetchUserHistory()
    }


    render(){

        const { Header, Content } = Layout;

        return(
            <div className='business-container'>
                <Layout className="layout">
                    <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        onSelect={(menu)=>this.setState({menuIndex: menu.key})}
                    >
                        <Menu.Item key={'1'}>User Static</Menu.Item>
                        <Menu.Item key={'2'}>Food Static</Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '25px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>

                        { 
                            this.props.historyFood.filter((food, idx)=>(
                                idx === this.props.historyIndex ? food : false 
                            )).map((data, idx)=>
                                    this.state.menuIndex === '2' ?
                                    <BarChart 
                                        foodDataName={data[0]} 
                                        foodDataStatic={data[1]}  
                                        setIndexSelector={this.props.setIndexSelector}
                                        historyIndex={this.props.historyIndex}
                                        fetchHistoryWithDate={this.props.fetchHistoryWithDate}
                                        key={idx}
                                    /> :
                                    <UserChart
                                        userData={this.props.historyUser}
                                        fetchHistoryUserWithDate={this.props.fetchHistoryUserWithDate}
                                     />
                            ) 
                        }

                    </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    historyFood : selectFoodHistory,
    historyIndex: selectHistoryIndex,
    historyUser: selectUserHisroty
})

const mapDispatchToProps = (dispatch) => ({
    startLoadingHistory: () => dispatch(startFetchHistoryProcess()),
    setIndexSelector: (value) => dispatch(setIndexSelector(value)),
    fetchHistoryWithDate: (datePast, dateFuture) => dispatch(fetchHistoryWithDateSelect(datePast, dateFuture)),
    startFetchUserHistory: () => dispatch(startFetchHistoryUserProcess()),
    fetchHistoryUserWithDate: (datePast, dateFuture) => dispatch(FetchHistoryUserProcessWithDateSelect(datePast, dateFuture))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage) 