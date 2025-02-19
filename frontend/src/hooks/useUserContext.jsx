import { useContext } from "react"
import { userContext } from "../contexts/userContextProvider"

export const useUserContext = () => {
    const context = useContext(userContext);

    if(!userContext) {
        throw Error("User context cannot be used outside of User Context.")
    }

    return context
}