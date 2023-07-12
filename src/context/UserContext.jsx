import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;

  const [userName, setUserName] = useState('Suzette Sousa');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
