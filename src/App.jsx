import { useState } from 'react'
import IngredientList from './IngredientList.jsx';
import RecipeList from './RecipeList.jsx';
import Button from './Button.jsx';
import * as emoji from 'node-emoji'



function App() {

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  const searchBtn = () => {
    location.reload();
  };

  const emoji = String.fromCodePoint(0x1F37D)


  return (
    <>

      <RecipeList />
      <IngredientList />
      <Button title={emoji + ' Start cooking! ' + emoji} onClick={searchBtn} styling='search-btn' />
    </>
  )
}

export default App
