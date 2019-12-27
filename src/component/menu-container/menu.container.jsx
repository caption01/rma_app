import React from 'react'

// redux
import { selectMenu } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

// component
import MenuComponent from '../menu/menu.component'




const MenuContainer = (props) => {

    const typeShow = {
        '2': 'food',
        '3': 'drink',
        '4': 'desert'
    }

    console.log(props.menus)
    
    return(
        <div className='menu-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {/* {
                props.menus.map((menu, idx) => <MenuComponent data={menu} key={idx} /> )
            } */}

            {
                props.menus.filter(menu => menu.type === typeShow[props.type])
                    .map((menu, idx) => <MenuComponent data={menu} key={idx} /> )
            }

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    menus: selectMenu
  })

export default connect(mapStateToProps)(MenuContainer)