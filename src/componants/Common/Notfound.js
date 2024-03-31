import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/loginasuser")
        }
        else{
            navigate("home")
        }
    }, [navigate]);
    return <h6>redirecting....</h6>;
  }
export default NotFound
