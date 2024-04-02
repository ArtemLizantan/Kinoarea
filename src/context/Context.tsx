import { ReactNode, createContext, useContext, useState } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const MoviesContext = createContext({});

export const MoviesProvider = ({ children }: MyComponentProps) => {
  const [tabsData, setTabsData] = useState<string | undefined>("All");

  const contextValue = { tabsData, setTabsData };

  console.log(contextValue);

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a FiltersProvider");
  }
  return context;
};
