const { useContext } = require("react");
const { AuthContext } = require("../Components/AuthProvider/AuthProvider");

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;