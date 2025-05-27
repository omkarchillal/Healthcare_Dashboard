import { activityData } from "../data/appointmentData";

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value));

  return (
    <div style={{ backgroundColor: "#F3F3FF" }} className="rounded-5 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-semibold text-dark">Activity</h5>
        <span className="text-muted small">
          {activityData.weeklyAppointments} appointments on this week
        </span>
      </div>

      <div className="d-flex align-items-end gap-3" style={{ height: "8rem" }}>
        {activityData.chartData.map((data) => (
          <div key={data.day} className="d-flex flex-column align-items-center flex-fill">
            <div
              className="w-100 d-flex justify-content-center align-items-end mb-2"
              style={{ height: "100px" }}>
              <div
                className="w-50 rounded-top"
                style={{
                  height: `${(data.value / maxValue) * 100}%`,
                  minHeight: "8px",
                  background: "linear-gradient(to top, #06b6d4, #6366f1)",
                }}
              />
            </div>
            <span className="small text-muted">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
