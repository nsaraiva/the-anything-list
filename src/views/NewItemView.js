
function NewItem({handleItemChange, itemData, newItem, textAreaRef, cleartextArea, items}){

    return(
        <div className="new-item">
            <div>                
            <textarea autoFocus
                    placeholder='Escreva qualquer coisa...' 
                    onChange={handleItemChange}
                    type="text" 
                    name="title"
                    id={`item${items.itemId}`}
                    value={itemData.title} 
                    ref={textAreaRef}
                    rows={1} />
            </div>
            <div onClick={() => {newItem(itemData.title); cleartextArea()}} className="new-item-button">
                +
            </div>
        </div>
    );
}

export default NewItem;