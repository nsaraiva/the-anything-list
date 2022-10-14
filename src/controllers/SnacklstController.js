import {useState, cloneElement, Children} from 'react';

export default function SnacklstController({children}){

    const [items, setItems] = useState([]);

    function newItem(title){
        if(title){
            setItems([...items, {
                id: items.length++,
                title: title,
                votes: 0   
            }]);
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

    return cloneElement(children, {items, newItem, saveItem});
}