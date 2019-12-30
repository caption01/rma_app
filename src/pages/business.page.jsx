import React from 'react'

// ant-design
import { Layout, Menu, Breadcrumb } from 'antd';



class BusinessPage extends React.Component {


    render(){

        const { Header, Content, Footer } = Layout;

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
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '25px' }}>
                    
                    <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>Content</div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default BusinessPage