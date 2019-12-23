import React from 'react'

//ant design
import { Layout, Menu, Breadcrumb } from 'antd';

// component
import OrderContainer from '../component/order-container/order-container.component'

class BohPage extends React.Component {

    state = {
        time : new Date(),
        selectMenu : '1'
    }

    componentDidMount = () => {
        setInterval(()=>{
            this.liveTimeUpDate()
        }, 1000)

    }

    liveTimeUpDate = () => {
        this.setState({
            time: new Date()
        })
    }

    handleSelectMenu = (e) => {
        this.setState({selectMenu: e.key})
    }

    render() {

        const { selectMenu } = this.state
 
        const { Header, Content, Footer } = Layout;

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
                            onSelect={this.handleSelectMenu}
                        >
                            <Menu.Item key="1">Order</Menu.Item>
                            <Menu.Item key="2">Complete</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
                        <Breadcrumb style={{ margin: '16px 24px' }}>
                            <Breadcrumb.Item>Timer {this.state.time.toLocaleTimeString()}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>
                            <OrderContainer selectDisplay={selectMenu} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>

        )
    }

}


export default BohPage;