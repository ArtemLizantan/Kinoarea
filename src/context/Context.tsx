import { ReactNode, createContext, useContext, useState } from "react";

interface MoviesContextType {
  tabsDataNowInCinema: string;
  setTabsDataNowInCinema: React.Dispatch<React.SetStateAction<string>>;
  tabsDataPopular: string;
  setTabsDataPopular: React.Dispatch<React.SetStateAction<string>>;
}

interface MyComponentProps {
  children: ReactNode;
}

const MoviesContext = createContext<MoviesContextType>({
  tabsDataNowInCinema: "All",
  setTabsDataNowInCinema: () => {},
  tabsDataPopular: "All",
  setTabsDataPopular: () => {},
});

export const MoviesProvider = ({ children }: MyComponentProps) => {
  const [tabsDataNowInCinema, setTabsDataNowInCinema] = useState("All");
  const [tabsDataPopular, setTabsDataPopular] = useState("All");

  const contextValue = {
    tabsDataNowInCinema,
    setTabsDataNowInCinema,
    tabsDataPopular,
    setTabsDataPopular,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};
