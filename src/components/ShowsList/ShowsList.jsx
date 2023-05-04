import photo from "../../img/missing.jpg"
import style from './ShowsList.module.css'
const ShowsList = ({ shows, handleClick }) => {
    return (
        <div>
            {shows.length === 0 ? <p className={style.typeName}>Sorry, nothing found with this search</p> :
                <div className={style.cardContainer}>{
                    shows.map((item) => {
                        return (
                            <div className={style.showCard} key={item.show.id} onClick={e => handleClick(item.show.id)}>
                                {item.show.image ? <img src={item.show.image.medium} alt="Movie banner" /> : <img className={style} src={photo} alt="Movie banner is missing" />}
                                <h2>{item.show.name}</h2>
                                <h3>{item.show.rating.average ? item.show.rating.average : "No rating"}</h3>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ShowsList;