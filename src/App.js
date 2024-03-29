import { useState, useRef, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { DataContext } from "./Context/DataContext.jsx";
import { SearchContext } from "./Context/SearchContext.jsx";
import ArtistView from "./components/ArtistView";
import AlbumView from "./components/AlbumViews";

function App() {
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

  const API_URL = "https://itunes.apple.com/search?term=";

  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        return setData(resData.results);
      } else {
        return setMessage("Not found.");
      }
      console.log(resData);
    };
    fetchData();
  };

  return (
    <div className="app">
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchContext.Provider
                  value={{
                    term: searchInput,
                    handleSearch: handleSearch,
                  }}
                >
                  <SearchBar />
                </SearchContext.Provider>
                <DataContext.Provider value={data}>
                  <Gallery />
                </DataContext.Provider>
              </Fragment>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
