import { useState } from "react";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import classes from "./Layout.module.scss";

function Layout (props) {

  const [menu, setMenu] = useState({
    menu: false
  });

  const toggleMenuHandler = () => {
    setMenu({
      menu: !menu.menu
    })
  };

  const menuCloseHandler = () => {
    setMenu({
      menu: false
    })
  };

  return (
    <div className={classes['Layout']}>

      <Drawer
        isOpen={menu.menu}
        onClose={menuCloseHandler}
      />

      <MenuToggle
        onToggle={toggleMenuHandler}
        isOpen={menu.menu}
      />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
