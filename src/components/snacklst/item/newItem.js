import {useState, useRef} from 'react';

import AutosizeTextArea from './autosizeTextArea';

function NewItem(props){
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

    return(
        <div className="new-item">
            <div>                
            <textarea autoFocus
                    placeholder='Escreva qualquer coisa...' 
                    onChange={handleItemChange}
                    type="text" 
                    name="title"
                    id={`item${props.itemId}`}
                    value={itemData.title} 
                    ref={textAreaRef}
                    rows={1} />
            </div>
            <div onClick={() => props.newItem(itemData.title)} className="new-item-button">
                +
            </div>
        </div>
    );
}

export default NewItem;