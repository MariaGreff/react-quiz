import { useState } from "react";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";
import classes from "./Auth.module.scss";

function Auth () {

  const [state, setState] = useState({
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
  }
});

  const loginHandler = () => {

  };

  const registerHandler = () => {

  };

  const submitHandler = event => {
    event.preventDefault();
  };

  const onChangeHandler = (event, controlName) => {
    console.log(controlName, event);
  };

  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.value}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => onChangeHandler(event, controlName)}
        />
      )
    })
  };

  return (
    <div className={classes["Auth"]}>
      <div>
        <h1>Authorization</h1>

        <form className={classes["AuthForm"]} onSubmit={submitHandler}>

          {renderInputs()}

          <Button
            type="success"
            onClick={loginHandler}
          >
          Log In</Button>
          <Button
            type="primary"
            onClick={registerHandler}
          >Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;