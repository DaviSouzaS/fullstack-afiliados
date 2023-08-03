import { iLogin, iRegister } from "../../schemas/user.schemas";

export interface iUserContext {
    login: (data: iLogin) => void
    registerUser: (data: iRegister) => void
}

export interface iUserContextProps {
    children: React.ReactNode
}
