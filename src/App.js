
import {useState} from 'react';

import './App.css';
import Item from './components/item';

function App() {
  const [items, setItems] = useState([]);

  function newItem(){
    setItems([...items, {
      id: items.length++,
      title: '',
      wasSaved: false,
      votes: 0   
    }]);
  }

  function saveItem(id, title){
    console.log(id, title);
    setItems(prevItems => {
      return prevItems.map(item => {
        if(item.id === id){
          return {
            ...item,
            wasSaved: true,
            title: title
          }
        }
        return item;
      });
    });
  }

  // console.log(items);
  const allItems = items.map((item) => {
    if(items.length > 0){
      return <Item key={item.id} 
        itemId={item.id}
        title={item.title} 
        votes={item.votes} 
        wasSaved={item.wasSaved}
        saveItem={saveItem}
        items = {items}
        setItems={setItems} />;
    } else {
      return null;
    }
  });

  return (
    <div className="App">
    <div className="items-container">
      <div className="add-item" onClick={newItem}>
        <h3>+</h3>
      </div>
      {allItems}
    </div>
    </div>
  );
}

export default App;
