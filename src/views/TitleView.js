import '../assets/css/title.css'

function TitleView(){
    return(
        <div className="title">
            <div className="column-1">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="column-2">
                <h3 className="title-text">Snacklst</h3>
            </div>
            <div className="column-3"></div>
        </div>
    );
}

export default TitleView;