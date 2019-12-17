import React from 'react';

// ant-d component
import { Layout, Menu, Breadcrumb, Icon } from 'antd';



class UserPage extends React.Component {

  state = {
    collapsed: false,
    title: 'Your information'
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  fetchData = (path) => {
    fetch(`http://localhost:3000${path}`)
      .then(result => result.json())
      .then(result => console.log(result))
      .catch(err => console.log(`cant fetch data ${err}`))
  }

  handleTitleChange = (data) => {
    console.log(data.item.props.value)
    this.setState({
      title: data.item.props.value
    })
  }

  render() {

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;

    const { match, history } = this.props
    
    return (
      <div className='App'>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider 
              collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
              collapsedWidth={0}
              zeroWidthTriggerStyle={{
                width: '20px',
                right: '-20px',
                top: '3px'
              }}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={(key)=>this.handleTitleChange(key)} >
                    <Menu.Item key="1" value={'Your information'}>
                      <Icon type="pie-chart" />
                      <span>Profile</span>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          <span>Menu</span>
                        </span>
                      }
                    >
                        <Menu.Item key="3" value={'Choose menu'}>Food</Menu.Item>
                        <Menu.Item key="4" value={'Choose drink'}>Drink</Menu.Item>
                        <Menu.Item key="5" value={'Choose desert'}>Desert</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="team" />
                          <span>Order</span>
                        </span>
                      }
                    >
                        <Menu.Item key="6" value={'Menu is process'}>In-Que</Menu.Item>
                        <Menu.Item key="8" value={'Menu history'}>history</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" value={'Visit our story'}>
                      <Icon type="file" />
                      <span>Story</span>
                    </Menu.Item>
                </Menu>
            </Sider>
                <Layout>
                  <Header style={{ background: '#f0f2f5', padding: 0, height: '32px' }} />
                  <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 1000 }}>
                        This gonna be user plate
                        <button onClick={()=>this.fetchData(history.location.pathname)} > Clickme </button>
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        </Layout>
      </div>
    )
  }
}

export default UserPage;