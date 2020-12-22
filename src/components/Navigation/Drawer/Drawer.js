import { NavLink } from "react-router-dom";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import classes from "./Drawer.module.scss"

const links = [
  {to: '/', label: 'List of quizzes', exact: true},
  {to: '/auth', label: 'Authorization', exact: false},
  {to: '/quiz-creator', label: 'Create quiz', exact: false},
]

function Drawer (props) {

  const cls = [classes["Drawer"]];
 
  if (!props.isOpen) {
    cls.push(classes["close"])
  }

  const renderLinks = () => {

    const clickHandler = () => {
      props.onClose();
    };

    return links.map((link, index) => {
      return(
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes["active"]}
            onClick={clickHandler}
          >{link.label}</NavLink>
        </li>
      )
    })
  };

  return (
    <>
    <nav className={cls.join(" ")}>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
    {
      props.isOpen ?  <Backdrop onClick={props.onClose}/> : null
    }
    </>
  )
};

export default Drawer;