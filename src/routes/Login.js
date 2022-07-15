import LoginForm from "../Components/LoginForm";
// import { Navigate } from "react-router-dom";

const Login = ({ setToken }) => {
    // if(token){
    //     return <Navigate to ="/Home" />
    // }
    return(
        <main>
            <LoginForm setToken={setToken} />
        </main>
    )

}

export default Login;