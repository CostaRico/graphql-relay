import React, {Component} from 'react'
import {
  graphql,
  createFragmentContainer
} from 'react-relay'

import DrawerTypes from 'react-md/lib/Drawers/DrawerTypes'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'

class Layout extends Component {
  render() {

    debugger;
    return(
      <NavigationDrawer
        toolbarTitle="Widget List"
        drawerTitle="NavigationMenu"
        desktopDrawerType={DrawerTypes.CLIPPED}
      >
        {this.props.children}
      </NavigationDrawer>
    )
  }
}

const layoutContainer = createFragmentContainer(Layout, {
  viewer: graphql`
    fragment Layout_viewer on Viewer {
      Post(id: "cj8kjyidn2odi0136i8v87a2a"){
        name
      }
    }
  `
})

export default layoutContainer
