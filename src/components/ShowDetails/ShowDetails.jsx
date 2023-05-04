import photo from '../../img/missing.jpg'
import style from './ShowDetails.module.css'
const ShowDetails = ({ showDetails }) => {

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className={style.detailsContainer}>
      <div>
        {showDetails.image ? <img src={showDetails.image.medium} alt="Movie banner" /> : <img src={photo} alt="Movie banner is missing" />}
      </div>
      <div>
        <h2>{showDetails.name}</h2>
        <span className={style.title}>GENRE:</span>
        {showDetails.genres.map((genre, index) => (
          <span key={index} className={style.genre}> {genre}</span>))}
        <p><span className={style.title}>RATING:</span> <span className={style.rating}>{showDetails.rating.average ? showDetails.rating.average : "No rating"}</span></p>
        <p><span className={style.title}>LINK TO SHOW:</span> {showDetails.officialSite ? <a href={showDetails.officialSite} target='blank'>{showDetails.officialSite}</a> : "No oficcial site"}</p>
        <p><span className={style.title}>STATUS:</span> {showDetails.status ? showDetails.status : "No status"}</p>
        <p><span className={style.title}>SCHEDULE:</span> {showDetails.schedule.time ? showDetails.schedule.time : "No time"} -
          {showDetails.schedule.days === [] ? showDetails.schedule.days.map((day, index) => <span key={index}>{day}</span>) : " No day"}</p>
        <p><span className={style.title}>SUMMARY:</span> {showDetails.summary ? removeTags(showDetails.summary) : "No summary"}</p>

      </div>
    </div>
  )
}

export default ShowDetails;