import { NavigationContext } from 'contexts/NavigationContext';
import { useContext } from 'react';
import { NavigationContextProps } from 'types/NavigationContextProps';

export const useNavigation = (): NavigationContextProps => {
  const context = useContext(NavigationContext);

  if (!context)
    throw new Error(
      'useNavigation must be used within an NavigationContextProvider'
    );

  return context;
};
