import {useRef, useState} from 'react';

import './item.css';
import Buttons from './buttons';
import AutosizeTextArea from './autosizeTextArea';

function Item(props) {
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

    return (
        props.wasSaved ? 
            <div className="item">
                <div className="item-content">
                    <p className="item-title">{props.title}</p>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="item-buttons">
                    x
                    <i class="fa-regular fa-thumbs-up">
                        <span> 0</span>
                    </i>
                    <i class="fa-regular fa-comment"> 
                        <span> 0</span>
                    </i>
                </div>
            </div> : 
            <div className="new-item">
                <i className="fa-solid fa-face-grin"></i>
                <textarea autoFocus
                    placeholder='Escreva qualquer coisa...' 
                    onChange={handleItemChange}
                    type="text" 
                    name="title"
                    id={`item${props.itemId}`}
                    value={itemData.title} 
                    ref={textAreaRef}
                    rows={1} />
                <Buttons saveItem={props.saveItem} itemId={props.itemId} title={itemData.title} />
            </div>
    );
}

export default Item;