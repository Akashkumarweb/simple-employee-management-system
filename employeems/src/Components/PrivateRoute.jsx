
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const PrivateRoute = ({ children }) => {
    return localStorage.getItem("valid") ? children : <Navigate to="/" />;
};

// Define PropTypes for the component
PrivateRoute.propTypes = {
    children: PropTypes.node // 'node' covers anything that can be rendered: numbers, strings, elements or an array containing these types.
};

export default PrivateRoute;
