import classes from "./MenuToggle.module.scss";

function MenuToggle (props) {

  const cls = [
    classes["MenuToggle"],
    'fa',
  ];
  if (props.isOpen) {
    cls.push('fa-times');
    cls.push(classes["open"])
  } else {
    cls.push('fa-bars');
  }
  console.log(props);
  return (
    <i 
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )

};

export default MenuToggle;