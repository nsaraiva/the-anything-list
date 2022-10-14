import {useState, useRef} from 'react';

import AutosizeTextArea from '../utils/autosizeTextArea';
import NewItemView from '../views/NewItemView';

export default function NewItemController({newItem, items}){

    const[itemData, setItemData] = useState({
        title: ''
    });
    const textAreaRef = useRef(null);

    AutosizeTextArea(textAreaRef.current, itemData.title);

    function handleItemChange(e) {
        const {name, value} = e.target
        setItemData(prevItemData => {
          return{
            ...prevItemData,
            [name]: value
          }
        })
      }

    function cleartextArea(){
        setItemData({
            title: ''
        });
    }

    return <NewItemView handleItemChange = {handleItemChange} itemData={itemData} setItemData={setItemData} 
        textAreaRef={textAreaRef} cleartextArea={cleartextArea} newItem={newItem} items={items} />;
}