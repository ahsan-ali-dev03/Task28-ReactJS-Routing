function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>12</h2>
          <p>Total Posts</p>
        </div>

        <div className="dashboard-card">
          <h2>48</h2>
          <p>Comments</p>
        </div>

        <div className="dashboard-card">
          <h2>8</h2>
          <p>Popular Posts</p>
        </div>

      </div>

      <div className="dashboard-content">

        <h2>Recent Activity</h2>

        <div className="activity">
          <strong>New post published</strong>
          <span>Today</span>
        </div>

        <div className="activity">
          <strong>New comment received</strong>
          <span>Yesterday</span>
        </div>

        <div className="activity">
          <strong>Profile updated</strong>
          <span>2 days ago</span>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;