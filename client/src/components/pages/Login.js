import LoginForm from "../ui/loginForm";
import RouteHeader from "../widgets/routeheader";

const Login = (props) => {
  const {submitLogin} = props;
  return (
    <div>
      <RouteHeader title='Log In'/>,
      <LoginForm submitLogin={submitLogin} />
    </div>
  );
};

export default Login;