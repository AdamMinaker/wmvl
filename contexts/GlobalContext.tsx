import React, { useState } from 'react';

interface IGlobalContextProps {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {},
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export const GlobalContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen: sidebarOpen,
        setSidebarOpen: setSidebarOpen,
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};