import React, {useState} from 'react';
import Categories from './Categories';
import items from "./data"
import Menu from "./Menu"


function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [activeCategory,setActiveCategory] = useState("")
  const [category,setcCategory] = useState()
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
