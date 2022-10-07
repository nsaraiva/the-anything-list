import './item.css';

function Item(props) {    
    console.log(props);
    return (
            <div className="item">
                <div className="item-content">
                    <p className="item-title">{props.title}</p>
                </div>
                <div className="item-buttons"></div>
            </div>
    );
}

export default Item;