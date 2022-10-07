import './item.css';

function Item(props) {    
    console.log(props);
    return (
            <div className="item">
            <div></div>
                <div className="item-content">
                    <p className="item-title">{props.title}</p>
                </div>
                <div className="item-buttons">
                <i className="fa-regular fa-thumbs-up"></i>
                </div>
            </div>
    );
}

export default Item;