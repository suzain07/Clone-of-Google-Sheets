import { Link } from "react-router-dom";
const Landing = ()=>{
    return(
        <div className="landing">
            <Link to="/login"><button>Login To Your Account</button></Link>
            <h3>Don't have an account?</h3>
            <Link to="/signup"><button>Create New Account</button></Link>
        </div>
    )
}
export default Landing;