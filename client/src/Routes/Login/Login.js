import React from "react";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";

console.log(AmplifyTheme);
const MyTheme = Object.assign({}, AmplifyTheme);
MyTheme.button.backgroundColor = "red";
console.log(MyTheme);

const Login = () => <Authenticator theme={MyTheme} />;

export default Login;
