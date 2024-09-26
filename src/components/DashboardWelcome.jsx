import React from 'react';
import './DashboardWelcome.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DashboardWelcome = () => {
  return (
    <div className="welcome-card">
      <h2>Welcome Back !</h2>
      <p>
        By signing up, you are agreeing that we can use your email address to market to you. You can unsubscribe from
        marketing emails at any time by using the link in our emails.
      </p>

      <div className="notifications">
        <div className="notification-item">
          <span className="notification-count">7</span>
          <span className="notification-text">Unread notifications</span>
        </div>
        <div className="notification-item">
          <span className="notification-count">9</span>
          <span className="notification-text">Unread messages</span>
        </div>
      </div>

      <div className="profile-progress">
        <div>Profile Progress</div>
        <div className="barAndPercentage">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-percentage">50%
            </div>
            <button className="progress-detail">
              <ChevronRightIcon />
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default DashboardWelcome;
