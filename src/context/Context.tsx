import { ReactNode, createContext, useContext, useState } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const MoviesContext = createContext({});

export const MoviesProvider = ({ children }: MyComponentProps) => {
  const [tabsDataNowInCinema, setTabsDataNowInCinema] = useState<string>("All");
  const [tabsDataPopular, setTabsDataPopular] = useState<string>("All");

  const contextValue = {
    tabsDataNowInCinema,
    setTabsDataNowInCinema,
    tabsDataPopular,
    setTabsDataPopular,
  };

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
