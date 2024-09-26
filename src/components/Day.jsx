import React from 'react';
import './Day.css';

const Day = ({ day, date }) => {
    
  return (
    <div className='daybox'>
      <div className="day">{day}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default Day;
