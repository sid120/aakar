import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const storedUserInfo = localStorage.getItem("userInfo");
  const [userInfo, setUserInfoState] = useState(
    storedUserInfo ? JSON.parse(storedUserInfo) : {}
  );

  const setUserInfo = (newUserInfo) => {
    setUserInfoState(newUserInfo);
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  };

  useEffect(() => {
    // Additional logic when the component mounts (if needed)
    // For example, you might want to fetch user information from an API
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
