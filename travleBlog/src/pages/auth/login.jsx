import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { useAuth } from "../../../../travleBlog/src/context/AuthContext";

const Login=()=>{
    const {loggedIn, toggleAuth}= useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const afterLoginGoTo= location.state?.afterLoginGoTo?.pathname||"/";

const handleLogin=()=>{
toggleAuth();
navigate(afterLoginGoTo, {replace:true})
};

return (
<>
<Nav/>
<div style={{padding:"2rem"}}>
    <h2>Login Page</h2>
    {
        loggedIn ? (<p>You are already logged in</p>)
    : (
        <button onClick={handleLogin}>Click To Login</button>
     )}
</div>
</>)
}
 
export default Login