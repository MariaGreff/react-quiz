import classes from "./Drawer.module.scss"

const links = [
  1, 2, 3
]

function Drawer (props) {

  const cls = [classes["Drawer"]];

  if (!props.isOpen) {
    cls.push(classes["close"])
  }

  const renderLinks = () => {
    return links.map((link, index) => {
      return(
        <li key={index}>
          <a href='#'>Link {link}</a>
        </li>
      )
    })
  };

  return (
    <nav className={cls.join(" ")}>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
  )
};

export default Drawer;