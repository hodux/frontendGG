import { useState } from "react";

export const useUser = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!sessionStorage.getItem('usernameOrEmail'));

    return isUserLoggedIn;
}
