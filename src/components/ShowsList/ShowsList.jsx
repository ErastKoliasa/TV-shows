import photo from "../../img/missing.jpg" 
const ShowsList = ({shows, handleClick}) => {
    return(
        <div>
            { shows.length === 0 ? "Sorry, nothing found with this search" :
                shows.map((item) => {
                    return (
                        <div key={item.show.id} onClick={e => handleClick(item.show.id)}>
                            {item.show.image ? <img src={item.show.image.medium}  alt="Movie banner" /> : <img src={photo} alt="Movie banner is missing" />}
                            <h2>{item.show.name}</h2>
                            <h3>RATING: {item.show.rating.average ? item.show.rating.average : "No rating"}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowsList;