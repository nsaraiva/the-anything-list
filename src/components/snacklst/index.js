
import {useState} from 'react';

import Title from'./title/title.js'; 
import NewItem from './item/newItem.js';
import Item from './item';

function Snacklst(props){
    const [items, setItems] = useState([]);

    function newItem(title){
        if(title){
            console.log(`título: ${title}`);
            setItems([...items, {
                id: items.length++,
                title: title,
                votes: 0   
            }]);
            console.log(items);
        }   
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
          saveItem={saveItem}
          items = {items}
          setItems={setItems} />;
      } else {
        return null;
      }
    });


    return(
        <div className="snacklst">
            <Title />
            <div className="items">
                <NewItem newItem={newItem}/>
                {allItems}
            </div>
        </div>
    );
}

export default Snacklst;