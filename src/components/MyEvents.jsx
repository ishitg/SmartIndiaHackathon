import React from 'react';
import './MyEvents.css';
import Day from './Day.jsx';
import Date from './Date.jsx';
import TodayIcon from '@mui/icons-material/Today';
import AddIcon from '@mui/icons-material/Add';

const MyEvents = () => {
  const events = [
    {
      day: 'MON',
      date: '01',
      title: 'Online Workshop',
      type: 'Meeting',
      time: '09:00 - 12:00',
      platform: 'Google meeting',
      

    },
    {
      day: 'TUE',
      date: '02',
      title: 'Online Workshop',
      type: 'Meeting',
      time: '13:00 - 16:00',
      platform: 'Zoom',
    },
    {
      day: 'WED',
      date: '03',
      title: 'Internal Hackathon',
      type: 'Competition',
      time: '09:00 - 21:00',
      platform: 'College campus',
    },
  ];

  return (
    <div className="my-events-card">
        <h2>My Events</h2>
      <div className="header">
        
        <div className="date-picker">
          <input type="text" value="01.03.2024 - 07.03.2024" readOnly />
          <div className="calendar-icon"><TodayIcon /></div>
        </div>
        <button className="explore-btn">
          <div className="icon_div"><AddIcon/></div>
        <div className='text_div'>
           Explore events
           </div>
        </button>
      </div>

      

      <div className="event-lists">
      {events.map((event, index) => (
        <div className="list-item" key={index}>
          <Day day={event.day} date={event.date} />
          <Date
            title={event.title}
            type={event.type}
            time={event.time}
            platform={event.platform}
            background = {event.background}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyEvents;
