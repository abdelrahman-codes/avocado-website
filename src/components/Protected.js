import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    if (!localStorage.getItem("ManifastoAvocado")) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
};
export default Protected;