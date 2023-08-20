import React, { ReactNode, createContext } from "react";

// create context
const user = {
  name: "",
  email: "",
};
export const UserContext = createContext(user);

interface Props {
  children?: ReactNode;
}

// Provider context which contains shareable context data
export default function UseContextProvider({ children }:Props) {
  user.name = "Aminul";
  user.email = "aminul@gmail.com";
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
