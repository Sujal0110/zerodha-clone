import { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3002/auth/verify", {
                withCredentials: true,
            })
            .then((res) => {
                setAuthorized(res.data.success);
                setLoading(false);
            })
            .catch(() => {
                setAuthorized(false);
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Loading...</h1>;

    if (!authorized) {
        window.location.href = "http://localhost:5173/signup";
        return null;
    }

    return children;
}

export default ProtectedRoute;
