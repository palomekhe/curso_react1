import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nombreUsuario) => {}
}

