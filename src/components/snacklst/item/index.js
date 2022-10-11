import './item.css';

function Item(props) {    
    console.log(props);
    return (
            <div className="item">
                <div className="column-1"></div>
                <div className="item-content">
                    <p className="item-title">{props.title}</p>
                </div>
                <div className="item-buttons">
                    <div>ok</div>
                    <div className="like-button">
                        <i className="fa-regular fa-thumbs-up">
                            <span> 0 </span>
                        </i>
                        <i className="fa-regular fa-comment">
                            <span> 0 </span>
                        </i>
                    </div>
                </div>
            </div>
    );
}

export default Item;