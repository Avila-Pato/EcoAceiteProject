import {useUser} from "@clerk/clerk-react"
import { Children } from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser();


    if (!isLoaded) return null

    return isSignedIn ? children : <Navigate to="/" />;

}

export default PrivateRoute