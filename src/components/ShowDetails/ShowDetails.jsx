import photo from '../../img/missing.jpg'
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
        <div>
            {showDetails.image ? <img src={showDetails.image.medium} alt="Movie banner" /> : <img src={photo} alt="Movie banner is missing" />}
            <h2>{showDetails.name}</h2>
            GENRE:
            <ul>
                {showDetails.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>))}
            </ul>
            <p>RATING: {showDetails.rating.average ? showDetails.rating.average : "No rating"}</p>
            <p>LINK TO SHOW: {showDetails.officialSite ? <a href={showDetails.officialSite} target='blank'>{showDetails.officialSite}</a> : "No oficcial site"}</p>
            <p>STATUS: {showDetails.status ? showDetails.status : "No status"}</p>
            <p>SCHEDULE: {showDetails.schedule.time ? showDetails.schedule.time : "No time"} -
                {showDetails.schedule.days === []? showDetails.schedule.days.map((day, index) => <span key={index}>{day}</span>) : " No day"}</p>
            <p>SUMMARY: {showDetails.summary ? removeTags(showDetails.summary) : "No summary"}</p>

        </div>
    )
}

export default ShowDetails;