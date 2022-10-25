import Header from "./Components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";
import { useState } from "react";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";

function App() {

  const [searchValue, setSearchValue] = useState('pikachu')
  const [toSearch, setToSearch] = useState('')
  const [favorites, setFavorites] = useState(['pikachu', 'abra'])

  return (
    <>
      <BrowserRouter>
        <Header pokemonName={searchValue} setToSearch={setToSearch} />
        <Routes>
          <Route index path="/" element={<DetailPage toSearch={toSearch} pokemonName={searchValue} setSearchValue={setSearchValue} />} />
          <Route path= "Favorite" element = {<FavoritesPage toSearch={toSearch} pokemonName={searchValue} setSearchValue={setSearchValue} favorites={favorites} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
