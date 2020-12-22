import classes from "./Input.module.scss";

function Input (props) {

  const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched;
  };

  const inputType = props.type || 'text';
  const cls = [classes["Input"]];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes["Invalid"]);
  }
  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange ={props.onChange}
       />
       {
         isInvalid(props) ? <span>{props.errMessage || 'Check your email or password'}</span> : null
       }
    </div>
  )
};

export default Input;