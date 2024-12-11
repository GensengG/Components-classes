import './App.css';
import { ShopItemCC } from "./components/ShopItemCC.jsx";
import { Item } from "./components/Item.jsx"; 

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
    src: "https://github.com/netology-code/ra16-homeworks/blob/ra-51/components/store-class/i/item-black.jpg?raw=true",
  };

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'>
        <Item item={item} />
      </div>
    </div>
    <div className="window">
      <ShopItemCC item={item} />
    </div>
  </div>
  )
}

export default App;
