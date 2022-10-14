
import Title from './TitleView.js';
import NewItemController from '../controllers/NewItemController.js';
import Item from './ItemView';

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
              <NewItemController newItem={props.newItem} items={props.items} />
              {allItems}
          </div>
      </div>
  );
}