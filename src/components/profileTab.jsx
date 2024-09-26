import "./profileTab.css";

function Calendar({name, college, imgSrc}) {
 
  return (
    <>
      <div className="calendar">
      <img src={imgSrc} className="calendar-img" />
        <p>
          <strong>{name}</strong> <br/> <span className="clg">{college} </span><br/>
          <button className="view">View Profile</button>
          <button className="connect">Connect</button>
          <i class="fa-regular fa-user profile"></i>
        </p>
       
        
      </div>

      
    </>
  );
}

export default Calendar;
