import React from 'react';

// ant-d component
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectUserData, selectUserLoading } from '../redux/user/user.selector';
import { fetchingDataStart } from '../redux/user/user.action';

// component 
import ProfileContainer from '../component/profile/profile.component'

class UserPage extends React.Component {

  state = {
    collapsed: false,
    title: 'Your information',
    key: 1
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleTitleChange = (data) => {
    this.setState({
      title: data.item.props.value,
      key: data.key
    })
  }

  componentDidMount = () => {
    this.props.startFetchingData(this.props.history.location.pathname)
  }


  render() {

    const { userData } = this.props

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;


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
                    <div style={{ padding: 24, background: '#fff', minHeight: '80vh', display: 'flex' }}>

                      <ProfileContainer userData={userData} />

                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  userData: selectUserData,
  userLoading: selectUserLoading
})

const mapDispatchToProps = (dispatch) => ({
  startFetchingData: (userPath) => dispatch(fetchingDataStart(userPath))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);