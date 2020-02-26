import React, { createContext, useState, useCallback } from 'react';

const initialState = {
  isMenuOpen: false,
  toggleMenu: () => {},
};

const MenuContext = createContext<{ isMenuOpen: boolean; toggleMenu: () => void }>(initialState);

const MenuProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
