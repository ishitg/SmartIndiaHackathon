import Calendar from "./profileTab.jsx";
import "./card2.css";


function Card(){
    return(
        <div className="card">  <h2>People you may know</h2>
            <Calendar name="Mia Thompson" college="Indian Institute of Technology Rorkee" imgSrc = "https://t3.ftcdn.net/jpg/05/82/07/88/360_F_582078881_5tEPAOwIJvE7BDdeh5BlmO9VLg8bIWlf.jpg" idx={0}/> 
            <Calendar name="Emma Davis" college="Indian Institute of Technology Bombay" imgSrc = "https://t3.ftcdn.net/jpg/05/82/07/88/360_F_582078881_5tEPAOwIJvE7BDdeh5BlmO9VLg8bIWlf.jpg" idx={1}/>
            <Calendar name="Grace Adams" college="IISC Banglore" imgSrc = "https://t3.ftcdn.net/jpg/05/82/07/88/360_F_582078881_5tEPAOwIJvE7BDdeh5BlmO9VLg8bIWlf.jpg" idx={2}/>
        </div>
    );
}

export default Card;