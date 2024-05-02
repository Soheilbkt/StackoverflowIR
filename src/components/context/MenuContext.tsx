import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  isActive: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode; // اضافه کردن خصوصیت children به نوع props
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <MenuContext.Provider value={{ isActive, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
