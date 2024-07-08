import React from 'react'
import { MenuItem } from '../menu_components/MenuItems'
import { Sidebar } from '../menu_components/Sidebar'
// import { FixedNavbar } from '../main_components/navbar/FixedNavbar'
import styles from "./Menu.module.css"


const Menu = () => {
  // <FixedNavbar/>
  return (
    
    <div className={styles.menumain} >
        <Sidebar/>
        <MenuItem/>
    </div>
  )
}

export default Menu