import React from 'react'

import { connect } from 'react-redux'

//ant design
import { Layout, Menu, Breadcrumb } from 'antd';

//component
import TablesComponent from '../component/tables/tables.component';

//reselect
import { createStructuredSelector } from 'reselect';
import { setDataTable } from '../redux/table/table.action';
import { selectTablesAll } from '../redux/table/table.selector'

class FohPage extends React.Component {

    state = {
        time: new Date()
    }

    fetchTablesData = () => {

        fetch(`http://localhost:3000/tables`)
            .then(result => result.json())
            .then(result => {
                this.props.setDataTable(result)
            })
            .catch(err => console.log(`cant fetch table data ${err}`))

    }

    componentDidMount = () => {
        this.fetchTablesData()
        setInterval(()=>{
            this.liveTimeUpDate()
        }, 1000)
    }

    liveTimeUpDate = () => {
        this.setState({
            time: new Date()
        })

    }

    render() {

        const { Header, Content, Footer } = Layout;
        const { tables } = this.props;

        return (

            <div className='foh-page-container' >
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">Reserve</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
                        <Breadcrumb style={{ margin: '16px 24px' }}>
                            <Breadcrumb.Item>Timer {this.state.time.toLocaleTimeString()}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: '80vh', display: 'flex', flexWrap: 'wrap' }}>

                            {
                                tables.length ?
                                    tables.map(table => {
                                        return (<TablesComponent table={table} key={table.table_id} />)
                                    }) :
                                    'loading'
                            }

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>

        )
    }

}

const mapStateToProps = createStructuredSelector({
    tables: selectTablesAll
})

const mapDispatchToProps = dispatch => ({
    setDataTable: (data) => dispatch(setDataTable(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(FohPage);