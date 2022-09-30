function Buttons(props) {    
    return(
        <div className="new-item-buttons">
            <button className="close-button">X</button>
            <button onClick={() => props.saveItem(props.itemId, props.title)} className="save-button">Save</button>
        </div>
    );
}

export default Buttons;