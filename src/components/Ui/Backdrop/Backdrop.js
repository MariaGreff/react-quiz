import classes from './Backdrop.module.scss'

function Backdrop (props) {
  return (
    <div 
      className={classes["Backdrop"]}
      onClick={props.onClick}
    ></div>
  )
};

export default Backdrop;