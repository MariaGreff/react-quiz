import { useState } from "react";
import Button from "../../components/Ui/Button/Button";
import Input from "../../components/Ui/Input/Input";
import classes from "./Auth.module.scss";

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       };

function Auth () {

  const [state, setState] = useState({
    isFormValid: true,
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

  function validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    console.log(isValid);

    return isValid;
  };

  const onChangeHandler = (event, controlName) => {
    const formControls = {...state.formControls};
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach( name => {
      isFormValid = formControls[name].valid;
    });

    setState({
      formControls,
      isFormValid
    });

    console.log(formControls);

  };

  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
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
            disabled={!state.isFormValid}
          >
          Log In</Button>
          <Button
            type="primary"
            onClick={registerHandler}
            disabled={!state.isFormValid}
          >Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;