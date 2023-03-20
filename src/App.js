import { createContext, useState } from "react";
import Jumbotron from "./components/jumbotron";
import SearchField from "./components/searchField";
import Images from "./components/images";
import useAxios from "./hooks/useAxios";

// create context
export const ImageContext = createContext();

function App()  {
  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&query=office&client_id=${process.env
      .REACT_APP_ACCESS_KEY}`);
  
  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
};

export default App;
