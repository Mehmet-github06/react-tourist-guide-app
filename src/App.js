import React, {useState} from 'react';
import Categories from './Categories';
import items from "./data"
import Menu from "./Menu"

const allCategories = ["all",...new Set(items.map(item=> item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [activeCategory,setActiveCategory] = useState("")
  const [category,setcCategory] = useState(allCategories)
  return (
    <main>
     <section className='holiday section'>
      <div className='title'>

      </div>
     </section>
    </main>
  );
}

export default App;
