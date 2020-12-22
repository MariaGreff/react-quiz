import Button from "../../components/Ui/Button/Button";
import classes from "./Auth.module.scss";

function Auth () {

const loginHandler = () => {

};

const registerHandler = () => {

};

const submitHandler = event => {
  event.preventDefault();
};

  return (
    <div className={classes["Auth"]}>
      <div>
        <h1>Authorization</h1>

        <form className={classes["AuthForm"]} onSubmit={submitHandler}>
          <input type="text" />
          <input type="text" />
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