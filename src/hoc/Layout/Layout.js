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

  return (
    <div className={classes['Layout']}>

      <Drawer
        isOpen={menu.menu}
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
