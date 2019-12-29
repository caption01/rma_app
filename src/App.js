import React from 'react';

// react-router setting
import { Route, Switch, Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectRoleStaff } from './redux/staff/staff.selector'
import { selectUserData } from './redux/user/user.selector'

// page
import HomePage from './pages/home.page';
import UserPage from './pages/user.page';
import FohPage from './pages/foh.page';
import BohPage from './pages/boh.page'

class App extends React.Component {

  render() {

    return (
      <div className='App'>
      <Switch>
        <Route exact path='/'
          render={
            () => this.props.staffRole === 'foh' ?
            (<FohPage />) :
            this.props.staffRole === 'boh' ?
            (<BohPage />) :
            (<HomePage />)
          } 
        />
        <Route exact path='/user' component={UserPage} />
        <Route path='/qrlogin' component={UserPage} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  staffRole: selectRoleStaff,
  userData: selectUserData
})

export default connect(mapStateToProps)(App);
