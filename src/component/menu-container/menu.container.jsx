import React from 'react'

// redux
import { selectMenu } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

// component
import MenuComponent from '../menu/menu.component'




const MenuContainer = (props) => {
    
    return(
        <div className='menu-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {
                props.menus.map((menu, idx) => <MenuComponent data={menu} key={idx} /> )
            }

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    menus: selectMenu
  })

export default connect(mapStateToProps)(MenuContainer)