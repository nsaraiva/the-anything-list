
import Title from '../components/snacklst/title/title.js';
import NewItem from '../components/snacklst/item/newItem.js';
import Item from '../components/snacklst/item';

export default function SnacklstView(props){
    
  const allItems = props.items.map((item) => {
    if(props.items.length > 0){
      return <Item key={item.id} 
        itemId={item.id}
        title={item.title} 
        votes={item.votes} 
        saveItem={props.saveItem}
        items = {props.items}
        setItems={props.setItems} />;
    } else {
      return null;
    }
  });
    
  return(
      <div className="snacklst">
          <Title />
          <div className="items">
              <NewItem newItem={props.newItem}/>
              {allItems}
          </div>
      </div>
  );
}