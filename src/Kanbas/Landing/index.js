import { useNavigate } from "react-router-dom";
function Landing() {
    const navigate = useNavigate();
    const signin = () => {
        navigate("/Kanbas/signin");
    }
    const signup = () => {
        navigate("/Kanbas/signup");
    }
    return (
        <div>
          <button onClick={signin} className="btn btn-danger my-2 me-2">
            Sign In
          </button>
          <button onClick={signup} className="btn btn-danger my-2 me-2">
            Sign Up
          </button>
        </div>
    );
}

export default Landing;